import { Briefcase, Building2, Globe } from "lucide-react";

export function TopBarSection () {
  return (
    <div className="companies-hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Discover <span className="highlight">Innovative</span> Partners
        </h1>
        <p className="hero-subtitle">
          Explore top employers shaping the future of technology and beyond.
          Find your next career opportunity with industry leaders.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <Building2 size={24} />
            <div>
              <span className="stat-number">200+</span>
              <span className="stat-label">Companies</span>
            </div>
          </div>
          <div className="stat">
            <Briefcase size={24} />
            <div>
              <span className="stat-number">1000+</span>
              <span className="stat-label">Open Positions</span>
            </div>
          </div>
          <div className="stat">
            <Globe size={24} />
            <div>
              <span className="stat-number">50+</span>
              <span className="stat-label">Countries</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};