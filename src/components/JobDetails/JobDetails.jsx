import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./JobDetails.css";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Briefcase,
  DollarSign,
  Calendar,
  Globe,
  CheckCircle,
  Share2,
  Bookmark,
  Send,
  Users,
  Building,
  Award,
  ExternalLink,
} from "lucide-react";

// Mock data - in real app, you'd fetch this from API
import { jobCards } from "../../data/jobLists";
import logo from "../../data/img/company-logo.png";
const MOCK_JOBS = jobCards;

export function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saved, setSaved] = useState(false);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    // Simulate API fetch
    const fetchJob = () => {
      setLoading(true);
      setTimeout(() => {
        const foundJob = MOCK_JOBS.find((j) => j.id === parseInt(id));
        setJob(foundJob);
        setLoading(false);
      }, 500);
    };

    fetchJob();
  }, [id]);

  const handleApply = () => {
    setApplied(true);
    // In real app, you'd submit application here
    setTimeout(() => {
      alert("Application submitted successfully!");
    }, 300);
  };

  const handleSave = () => {
    setSaved(!saved);
    // In real app, save to user's saved jobs
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  };

  if (loading) {
    return (
      <div className="job-details-loading">
        <div className="loading-spinner"></div>
        <p>Loading job details...</p>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="job-not-found">
        <h2>Job Not Found</h2>
        <p>The job you're looking for doesn't exist or has been removed.</p>
        <button onClick={() => navigate("/jobs")} className="back-button">
          <ArrowLeft size={16} />
          Back to Jobs
        </button>
      </div>
    );
  }

  return (
    <div className="job-details-page">
      <div className="job-details-container">
        {/* Main Content */}
        <div className="job-details-main">
          {/* Navigation Header */}
          <nav className="job-details-nav">
            <button onClick={() => navigate("/jobs")} className="nav-back-btn">
              <ArrowLeft size={20} />
              Back to Jobs
            </button>
            <div className="nav-actions">
              <button onClick={handleShare} className="nav-action-btn">
                <Share2 size={18} />
                Share
              </button>
              <button
                onClick={handleSave}
                className={`nav-action-btn ${saved ? "saved" : ""}`}
              >
                <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
                {saved ? "Saved" : "Save"}
              </button>
            </div>
          </nav>
          {/* Job Header */}
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
                  <span
                    className={`work-mode-badge ${job.workMode.toLowerCase()}`}
                  >
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

          {/* Job Details Grid */}
          <div className="job-details-grid">
            {/* Left Column - Job Description */}
            <div className="job-description-section">
              <div className="section-header">
                <h2>Job Description</h2>
                <div className="section-actions">
                  <span className="post-date">
                    Posted: {new Date(job.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="job-description-content">
                <p>{job.description}</p>
              </div>

              {/* Requirements */}
              <div className="requirements-section">
                <h3>Requirements</h3>
                <ul className="requirements-list">
                  {job.requirements.map((req, index) => (
                    <li key={index}>
                      <CheckCircle size={16} />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills */}
              <div className="skills-section">
                <h3>Required Skills</h3>
                <div className="skills-tags">
                  {job.tags.map((tag, index) => (
                    <span key={index} className="skill-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="benefits-section">
                <h3>Benefits & Perks</h3>
                <div className="benefits-grid">
                  {job.benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                      <Award size={20} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Quick Info */}
            <div className="job-info-sidebar">
              <div className="info-card">
                <h3>Quick Info</h3>
                <div className="info-items">
                  <div className="info-item">
                    <MapPin size={18} />
                    <div className="info-content">
                      <span className="info-label">Location</span>
                      <span className="info-value">{job.location}</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <Briefcase size={18} />
                    <div className="info-content">
                      <span className="info-label">Employment Type</span>
                      <span className="info-value">{job.employmentType}</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <Award size={18} />
                    <div className="info-content">
                      <span className="info-label">Experience Required</span>
                      <span className="info-value">
                        {job.minExperience}+ years
                      </span>
                    </div>
                  </div>

                  <div className="info-item">
                    <Calendar size={18} />
                    <div className="info-content">
                      <span className="info-label">Application Deadline</span>
                      <span className="info-value deadline">
                        {new Date(job.deadline).toLocaleDateString()}
                        <span className="days-left">
                          (
                          {Math.ceil(
                            (new Date(job.deadline) - new Date()) /
                              (1000 * 60 * 60 * 24)
                          )}{" "}
                          days left)
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="info-item">
                    <Clock size={18} />
                    <div className="info-content">
                      <span className="info-label">Work Mode</span>
                      <span className="info-value">{job.workMode}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Info */}
              <div className="company-card">
                <h3>About {job.company}</h3>
                <p className="company-description">
                  A leading technology company specializing in innovative
                  solutions for digital transformation with a global presence.
                </p>
                <div className="company-stats">
                  <div className="stat">
                    <Users size={16} />
                    <span>500+ Employees</span>
                  </div>
                  <div className="stat">
                    <Globe size={16} />
                    <span>Global</span>
                  </div>
                </div>
                <button className="company-website-btn">
                  Visit Website
                  <ExternalLink size={16} />
                </button>
              </div>

              {/* Similar Jobs */}
              <div className="similar-jobs">
                <h3>Similar Jobs</h3>
                <div className="similar-jobs-list">
                  {MOCK_JOBS.slice(0, 3).map((similarJob) => (
                    <Link
                      to={`/jobs/${similarJob.id}`}
                      key={similarJob.id}
                      className="similar-job-card"
                    >
                      <h4>{similarJob.position}</h4>
                      <div className="similar-job-meta">
                        <span>{similarJob.company}</span>
                        <span className="salary">
                          ${similarJob.minSalary.toLocaleString()}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Apply Bar (for mobile) */}
        <div className="mobile-apply-bar">
          <div className="mobile-salary">
            <DollarSign size={16} />
            <span>${job.minSalary.toLocaleString()}/year</span>
          </div>
          <button
            onClick={handleApply}
            disabled={applied}
            className={`apply-btn ${applied ? "applied" : ""}`}
          >
            {applied ? "Applied ✓" : "Apply Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
