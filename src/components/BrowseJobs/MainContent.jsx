import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export function MainContent({ jobs = [], onSaveJob, onUnsaveJob }) {
  const { user } = useAuth();

  return (
    <main className="main-content">
      <div className="content-header">
        <h2 className="content-title">Available Opportunities</h2>
        <p className="content-subtitle">
          {jobs.length === 0
            ? "No positions currently available"
            : `Showing ${jobs.length} ${jobs.length === 1 ? "position" : "positions"
            }`}
        </p>
      </div>

      {jobs.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <h3>No positions available</h3>
          <p className="empty-message">
            Currently there are no job openings matching your criteria.
          </p>
        </div>
      ) : (
        <div className="job-list">
          {jobs.map((job) => (
            <motion.div
              className="job-card-wrapper"
              key={job._id || job.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="job-card">
                <div className="job-header">
                  <div className="job-title-section">
                    <h3 className="job-position">{job.position}</h3>
                    <div className="company-badge">
                      <span className="company-name">{job.company}</span>
                    </div>
                  </div>
                  <div className="job-actions">
                    <button className="save-btn" aria-label="Share job">
                      <span className="save-icon">Share</span>
                    </button>
                    {user && (
                      <button
                        className={`save-btn ${user.savedJobs?.includes(job._id) ? "saved" : ""}`}
                        onClick={() => user.savedJobs?.includes(job._id) ? onUnsaveJob(job._id) : onSaveJob(job._id)}
                        aria-label="Save job"
                      >
                        <span className="save-icon">
                          {user.savedJobs?.includes(job._id) ? "Saved" : "Save"}
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                <div className="job-location-section">
                  <span className="location-icon">
                    <MapPin />
                  </span>
                  <span className="location-text">{job.location}</span>
                </div>

                <div className="job-metadata">
                  <span className={`work-mode-badge ${job.workMode.toLowerCase()}`}>
                    {job.workMode}
                  </span>
                  <span className="employment-type">{job.employmentType}</span>
                  <span className="experience-level">
                    {job.minExperience}+ years experience
                  </span>
                </div>

                <p className="job-description">
                  {job.description.length > 150
                    ? `${job.description.substring(0, 150)}...`
                    : job.description}
                  {job.description.length > 150 && (
                    <button className="read-more">Read more</button>
                  )}
                </p>

                <div className="job-skills">
                  <span className="skills-label">Skills:</span>
                  <div className="skills-list">
                    {job.tags.map((tag, index) => (
                      <span className="skill-tag" key={index}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="job-footer">
                  <div className="salary-info">
                    <span className="salary-label">Salary Range:</span>
                    <span className="salary-amount">
                      ${job.minSalary.toLocaleString()}+
                    </span>
                    <span className="salary-period">/year</span>
                  </div>

                  <div className="footer-actions">
                    <span className="deadline">
                      <span className="deadline-label">Apply by:</span>
                      <span className="deadline-date">{new Date(job.deadline).toLocaleDateString()}</span>
                    </span>
                    <Link to={`/jobs/${job._id || job.id}`}>
                      <button className="apply-btn">
                        Apply Now
                        <span className="apply-arrow">→</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="load-more-container">
            <button className="load-more-btn">
              Load More Positions
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
