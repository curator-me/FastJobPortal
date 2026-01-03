import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const [ispos, setIspos] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIspos(window.scrollY >= 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="navbar"
      style={{
        position: ispos ? "fixed" : isHomePage ? "absolute" : "fixed",
        backgroundColor: ispos
          ? "#3f7d95e3"
          : isHomePage
          ? "#0000001e"
          : "#3f7d95e3",
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

          <NavLink to="/signin" className="link">
            Sign In
          </NavLink>
        </div>
      </div>
    </section>
  );
}
