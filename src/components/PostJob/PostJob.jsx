import "./index.css";
import { useState } from "react";
import { keywords } from "../../data/jobLists";

export function PostJob() {
  const [job, setJob] = useState({
    position: "",
    shortTitle: "",
    company: "",
    location: "",
    workMode: "Onsite",
    employmentType: "Full Time",
    minExperience: "",
    minSalary: "",
    deadline: "",
    tags: [],
    description: "",
    benefits: "",
    requirements: "",
    companyLogo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({ ...job, [name]: value });
  };

  const handleTagChange = (e) => {
    const { value } = e.target;
    setJob({ ...job, tags: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedJob = {
      ...job,
      minExperience: Number(job.minExperience),
      minSalary: Number(job.minSalary),
      tags: job.tags.split(",").map((t) => t.trim()),
      benefits: job.benefits.split(",").map((b) => b.trim()),
      requirements: job.requirements.split(",").map((r) => r.trim()),
      createdAt: new Date().toISOString(),
      editedAt: new Date().toISOString(),
    };

    console.log("Job Posted:", formattedJob);
    alert("Job posted successfully!");
  };

  return (
    <div className="post-job-container">
      <h1 className="post-job-title">Post a New Job</h1>

      <form onSubmit={handleSubmit} className="job-form">
        {/* Job Title */}
        <input
          type="text"
          name="position"
          placeholder="Job Position"
          className="input-field"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="shortTitle"
          placeholder="Short Job Title"
          className="input-field"
          onChange={handleChange}
        />

        {/* Company Info */}
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="input-field"
          required
          onChange={handleChange}
        />

        <input
          type="url"
          name="companyLogo"
          placeholder="Company Logo URL"
          className="input-field"
          onChange={handleChange}
        />

        {/* Location & Type */}
        <div className="form-row">
          <input
            type="text"
            name="location"
            placeholder="Location"
            className="input-field"
            required
            onChange={handleChange}
          />

          <select
            name="workMode"
            className="select-field"
            onChange={handleChange}
          >
            <option>Onsite</option>
            <option>Remote</option>
            <option>Hybrid</option>
          </select>
        </div>

        <div className="form-row">
          <select
            name="employmentType"
            className="select-field"
            onChange={handleChange}
          >
            <option>Full Time</option>
            <option>Part Time</option>
            <option>Contract</option>
            <option>Internship</option>
          </select>

          <input
            type="number"
            name="minExperience"
            placeholder="Minimum Experience (years)"
            className="input-field"
            onChange={handleChange}
          />
        </div>

        {/* Salary & Deadline */}
        <div className="form-row">
          <input
            type="number"
            name="minSalary"
            placeholder="Minimum Salary"
            className="input-field"
            onChange={handleChange}
          />

          <input
            type="date"
            name="deadline"
            className="input-field"
            onChange={handleChange}
          />
        </div>

        {/* Tags */}
        <select
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          className="input-field"
          onChange={handleTagChange}
        >
            {keywords.map((keyword) => (
              <option key={keyword} value={keyword}>{keyword}</option>
            ))}
        </select>

        {/* Description */}
        <textarea
          name="description"
          rows="6"
          placeholder="Job Description"
          className="textarea-field"
          onChange={handleChange}
        ></textarea>

        {/* Benefits */}
        <textarea
          name="benefits"
          rows="3"
          placeholder="Benefits (comma separated)"
          className="textarea-field"
          onChange={handleChange}
        ></textarea>

        {/* Requirements */}
        <textarea
          name="requirements"
          rows="4"
          placeholder="Requirements (comma separated)"
          className="textarea-field"
          onChange={handleChange}
        ></textarea>

        {/* Submit */}
        <button type="submit" className="submit-button">
          Post Job
        </button>
      </form>
    </div>
  );
}
