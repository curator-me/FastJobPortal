import {
  Award,
  Briefcase,
  ChevronRight,
  ExternalLink,
  Globe,
  MapPin,
  Star,
  Users,
} from "lucide-react";

const IMAGEKIT_URL = import.meta.env.VITE_IMAGEKIT_URL;

export function CompanyCard({ company }) {
  // Get company rating stars
  const renderStars = (rating) => {
    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < Math.floor(rating || 0) ? "#f59e0b" : "#e2e8f0"}
            strokeWidth={i < Math.floor(rating || 0) ? 0 : 1}
          />
        ))}
        <span className="rating-number">{rating?.toFixed(1) || "N/A"}</span>
      </div>
    );
  };

  // Get company size label
  const getSizeLabel = (size) => {
    if (size >= 10000) return "10k+ employees";
    if (size >= 5000) return "5k+ employees";
    if (size >= 1000) return "1k+ employees";
    if (size >= 500) return "500+ employees";
    if (size >= 100) return "100+ employees";
    if (size >= 50) return "50+ employees";
    return "Small team";
  };
  return (
    <div className="company-card" key={company.id}>
      {/* Company Header */}
      <div className="company-header">
        <div className="logo-container">
          <img
            src={`${IMAGEKIT_URL}/${company.logo}`}
            alt={company.name}
            className="company-logo"
          />
          {company.featured && (
            <div className="featured-badge">
              <Award size={12} />
              Featured
            </div>
          )}
        </div>
        <div className="company-title">
          <h2>{company.name}</h2>
          {renderStars(company.rating)}
        </div>
        <a
          href={company.website}
          target="_blank"
          rel="noreferrer"
          className="company-website"
        >
          <Globe size={16} />
          <span>Website</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Company Info */}
      <div className="company-info">
        <div className="info-item">
          <MapPin size={16} />
          <span>{company.location}</span>
        </div>
        <div className="info-item">
          <Users size={16} />
          <span>{getSizeLabel(company.size)}</span>
        </div>
        <div className="industry-tag">{company.industry}</div>
      </div>

      {/* Company Description */}
      <p className="company-description">
        {company.description.length > 120
          ? `${company.description.substring(0, 120)}...`
          : company.description}
      </p>

      {/* Company Stats */}
      <div className="company-stats">
        {company.openPositions && (
          <div className="stat-badge job-openings">
            <Briefcase size={14} />
            <span>{company.openPositions} open positions</span>
          </div>
        )}
        {company.founded && (
          <div className="stat-badge founded">
            <span>Est. {company.founded}</span>
          </div>
        )}
      </div>

      {/* Company Footer */}
      <div className="company-footer">
        <div className="tech-stack">
          {company.techStack?.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
          {company.techStack?.length > 3 && (
            <span className="more-tag">+{company.techStack.length - 3}</span>
          )}
        </div>
        <a
          href={company.careersPage || company.website}
          target="_blank"
          rel="noreferrer"
          className="view-jobs-btn"
        >
          View Jobs
          <ChevronRight size={16} />
        </a>
      </div>
    </div>
  );
}
