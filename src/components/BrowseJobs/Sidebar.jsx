import "./index.css";
import { keywords } from "../../data/jobLists";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="filter-section-title">Filter Jobs</h3>

      {/* Location */}
      <div className="filter-section">
        <h4>Location</h4>
        <input
          type="text"
          placeholder="Enter location"
          className="filter-input"
        />
      </div>

      {/* Experience */}
      <div className="filter-section">
        <h4>Experience</h4>
        <label>
          <input type="checkbox" />{" "}
          <span className="checkbox-label">Fresher</span>
        </label>
        <label>
          <input type="checkbox" />{" "}
          <span className="checkbox-label">1 - 3 Years</span>
        </label>
        <label>
          <input type="checkbox" />{" "}
          <span className="checkbox-label">5+ Years</span>
        </label>
      </div>

      {/* Tags */}
      <div className="filter-section">
        <h4>Skills / Tags</h4>
        {keywords.map((keyword, index) => (
          <label key={index}>
            <input type="checkbox" />{" "}
            <span className="checkbox-label">{keyword}</span>
          </label>
        ))}
      </div>

      {/* Employment Type */}
      <div className="filter-section">
        <h4>Employment Type</h4>
        <label>
          <input type="checkbox" />{" "}
          <span className="checkbox-label">Full Time</span>
        </label>
        <label>
          <input type="checkbox" />{" "}
          <span className="checkbox-label">Part Time</span>
        </label>
      </div>
      {/* Employment Type */}
      <div className="filter-section">
        <h4>Environment</h4>
        <label>
          <input type="checkbox" />{" "}
          <span className="checkbox-label">Onsite</span>
        </label>
        <label>
          <input type="checkbox" />{" "}
          <span className="checkbox-label">Online</span>
        </label>
        <label>
          <input type="checkbox" />{" "}
          <span className="checkbox-label">Hybrid</span>
        </label>
      </div>

      {/* Salary Range */}
      <div className="filter-section">
        <h4>Salary Range</h4>
        <div className="salary-range">
          <input type="number" placeholder="Min" />
          <input type="number" placeholder="Max" />
        </div>
      </div>

      <button className="apply-filters-btn">Apply Filters</button>
    </aside>
  );
}
