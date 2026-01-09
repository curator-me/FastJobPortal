import { Award, Briefcase, Building, CheckCircle, DollarSign, Globe, Send } from "lucide-react";
import logo from "../../data/img/company-logo.png";

export function JobHeader({ job, applied, handleApply }) {
  return (
    <div className="job-header-section">
      <div className="company-header">
        <div className="company-logo">
          <img src={logo} alt={job.company} />
        </div>
        <div className="company-info">
          <h1 className="job-title">{job.position}</h1>
          <div className="company-name">
            <Building size={16} />
            <span>{job.company}</span>
          </div>
          <div className="job-meta-tags">
            <span className={`work-mode-badge ${job.workMode.toLowerCase()}`}>
              <Globe size={14} />
              {job.workMode}
            </span>
            <span className="employment-badge">
              <Briefcase size={14} />
              {job.employmentType}
            </span>
            <span className="experience-badge">
              <Award size={14} />
              {job.minExperience}+ years
            </span>
          </div>
        </div>
      </div>

      <div className="job-header-actions">
        <div className="salary-display">
          <DollarSign size={18} />
          <div className="salary-amount">
            <span className="salary-number">
              ${job.minSalary.toLocaleString()}
            </span>
            <span className="salary-period">/year</span>
          </div>
        </div>
        <button
          onClick={handleApply}
          disabled={applied}
          className={`apply-btn ${applied ? "applied" : ""}`}
        >
          {applied ? (
            <>
              <CheckCircle size={18} />
              Applied
            </>
          ) : (
            <>
              <Send size={18} />
              Apply Now
            </>
          )}
        </button>
      </div>
    </div>
  );
}