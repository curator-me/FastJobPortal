import { Award, Briefcase, Calendar, Clock, ExternalLink, MapPin, Users, Globe } from "lucide-react";
import { Link } from "react-router";

export function JobDescriptionRightCol({ job, MOCK_JOBS }) {
  return (
    <>
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
                <span className="info-value">{job.minExperience}+ years</span>
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
            A leading technology company specializing in innovative solutions
            for digital transformation with a global presence.
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
    </>
  );
}