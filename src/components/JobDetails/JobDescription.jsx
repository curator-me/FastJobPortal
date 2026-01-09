import { Award, CheckCircle } from "lucide-react";

export function JobDescription({ job }) {
  return (
    <>
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
    </>
  );
}