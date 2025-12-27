import { useEffect, useState } from "react";
import "./Navbar.css";

export function Navbar() {
  const [ispos, setIspos] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 400) {
        setIspos(true);
      } else {
        setIspos(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className="navbar"
      style={{
        position: ispos ? "fixed" : "absolute",
        backgroundColor: !ispos ? "#0000001e" : "#3f7d95e3",
      }}
    >
      <div className="container">
        <div className="nav-links">
          <a className="link">Home</a>
          <a className="link">Brows Jobs</a>
          <a className="link">Post A Job</a>
          <a className="link">Companies</a>
          <a className="link">Pricing</a>
          <a className="link">Sign In</a>
        </div>
      </div>
    </section>
  );
}
