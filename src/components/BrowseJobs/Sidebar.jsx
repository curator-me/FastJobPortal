import "./index.css";
import { keywords } from "../../data/jobLists";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "motion/react";

function DropdownIcon({ isOpen }) {
  return (
    <motion.div
      animate={{
        rotate: isOpen ? 180 : 0,
        y: isOpen ? 0 : 5,
      }}
      transition={{ duration: 0 }}
    >
      <FaAngleDown />
    </motion.div>
  );
}

export function Sidebar() {
  const optionsCount = 5;
  const [showOptions, setShowOptions] = useState(
    Array(optionsCount).fill(true)
  );
  return (
    <aside className="sidebar">
      <h3 className="filter-section-title">Filter Jobs</h3>

      {/* Location */}
      <div className="filter-section">
        <h4>Location </h4>
        <input
          type="text"
          placeholder="Enter location"
          className="filter-input"
        />
      </div>

      {/* Experience */}
      <div className="filter-section">
        <h4
          onClick={() => {
            setShowOptions((prev) =>
              prev.map((value, index) => (index === 0 ? !value : value))
            );
          }}
        >
          Experience
          <DropdownIcon isOpen={showOptions[0]} />
        </h4>
        <div className={showOptions[0] ? "show-options" : "show-options close"}>
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
      </div>

      {/* Tags */}
      <div className="filter-section">
        <h4
          onClick={() => {
            setShowOptions((prev) =>
              prev.map((value, index) => (index === 1 ? !value : value))
            );
          }}
        >
          Skills / Tags <DropdownIcon isOpen={showOptions[1]} />
        </h4>
        <div className={showOptions[1] ? "show-options" : "show-options close"}>
          {keywords.map((keyword, index) => (
            <label key={index}>
              <input type="checkbox" />{" "}
              <span className="checkbox-label">{keyword}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Employment Type */}
      <div className="filter-section">
        <h4
          onClick={() => {
            setShowOptions((prev) =>
              prev.map((value, index) => (index === 2 ? !value : value))
            );
          }}
        >
          Employment Type
          <DropdownIcon isOpen={showOptions[2]} />
        </h4>

        <div className={showOptions[2] ? "show-options" : "show-options close"}>
          <label>
            <input type="checkbox" />{" "}
            <span className="checkbox-label">Full Time</span>
          </label>
          <label>
            <input type="checkbox" />{" "}
            <span className="checkbox-label">Part Time</span>
          </label>
        </div>
      </div>
      {/* Employment Type */}
      <div className="filter-section">
        <h4
          onClick={() => {
            setShowOptions((prev) =>
              prev.map((value, index) => (index === 3 ? !value : value))
            );
          }}
        >
          Environment
          <DropdownIcon isOpen={showOptions[3]} />
        </h4>
        <div className={showOptions[3] ? "show-options" : "show-options close"}>
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
