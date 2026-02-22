import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { User, LogOut, LayoutDashboard, ChevronDown } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

export function Navbar() {
  const [ispos, setIspos] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIspos(window.scrollY >= 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate("/");
  };

  return (
    <section
      className="navbar"
      style={{
        position: ispos ? "fixed" : "absolute",
        backgroundColor: ispos
          ? "#3f7d95e3"
          : isHomePage
            ? "#0000001e"
            : "#3b96bad1",
      }}
    >
      <div className="container">
        <div className="nav-links">
          <NavLink to="/" className="link" end>
            Home
          </NavLink>

          <NavLink to="/jobs" className="link">
            Browse Jobs
          </NavLink>

          <NavLink to="/post-job" className="link">
            Post A Job
          </NavLink>

          <NavLink to="/companies" className="link">
            Companies
          </NavLink>

          <NavLink to="/pricing" className="link">
            Pricing
          </NavLink>

          {user ? (
            <div className="profile-dropdown" ref={dropdownRef}>
              <div
                className="profile-trigger"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {user.profilePic ? (
                  <img src={user.profilePic} alt="Profile" className="profile-pic" />
                ) : (
                  <div className="profile-icon">
                    <User size={20} />
                  </div>
                )}
                <span className="user-name">{user.name.split(' ')[0]}</span>
                <ChevronDown size={14} className={`chevron ${isDropdownOpen ? 'open' : ''}`} />
              </div>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-header">
                    <p className="full-name">{user.name}</p>
                    <p className="email">{user.email}</p>
                  </div>
                  <hr />
                  <NavLink to="/dashboard" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                    <LayoutDashboard size={18} />
                    Dashboard
                  </NavLink>
                  <button className="dropdown-item logout-btn" onClick={handleLogout}>
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/signin" className="link">
              Sign In
            </NavLink>
          )}
        </div>
      </div>
    </section>
  );
}
