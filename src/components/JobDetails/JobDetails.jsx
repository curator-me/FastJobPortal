import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./JobDetails.css";
import { ArrowLeft, DollarSign, Share2, Bookmark } from "lucide-react";

// Mock data - in real app, you'd fetch this from API
import { jobCards } from "../../data/jobLists";

import { JobHeader } from "./JobHeader";
import { JobDescription } from "./JobDescription";
import { JobDescriptionRightCol } from "./JobDescriptionRightCol";
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
          <JobHeader job={job} applied={applied} handleApply={handleApply} />

          {/* Job Details Grid */}
          <div className="job-details-grid">
            {/* Left Column - Job Description */}
            <JobDescription job={job} />

            {/* Right Column - Quick Info, About, Similar Jobs */}
            <JobDescriptionRightCol job={job} MOCK_JOBS={MOCK_JOBS} />
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
