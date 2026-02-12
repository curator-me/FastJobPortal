import { useState } from "react";
import { motion } from "motion/react";
import { FaAngleDown } from "react-icons/fa6";
import "./index.css";
import {
  handleTagToggle,
  handleExperienceToggle,
  handleEmploymentToggle,
  handleEnvironmentToggle,
} from "../../api/BrowseJobs";

import { getFadeInProps } from "../../animation/whileInViewPort";

// Mock data replace with actual data source
import {
  keywords,
  experiences,
  Employment,
  Environment,
} from "../../data/jobLists";

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

export function Sidebar({ handleFilterJobs }) {
  const optionsCount = 5;
  const [showOptions, setShowOptions] = useState(
    Array(optionsCount).fill(true)
  );
  const [filterOptions, setFilterOptions] = useState({
    location: "",
    experience: [],
    tags: [],
    employmentType: [],
    environment: [],
    salaryRange: { min: 0, max: Infinity },
  });
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
          value={filterOptions.location}
          onChange={(e) =>
            setFilterOptions({ ...filterOptions, location: e.target.value })
          }
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
          {experiences.map((experience, index) => (
            <motion.label key={index} {...getFadeInProps(index)}>
              <input
                type="checkbox"
                checked={filterOptions.experience.includes(experience)}
                onChange={() =>
                  handleExperienceToggle(experience, setFilterOptions)
                }
              />{" "}
              <span className="checkbox-label">{experience}</span>
            </motion.label>
          ))}
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
            <motion.label key={index} {...getFadeInProps(index)}>
              <input
                type="checkbox"
                checked={filterOptions.tags.includes(keyword)}
                onChange={() => handleTagToggle(keyword, setFilterOptions)}
              />{" "}
              <span className="checkbox-label">{keyword}</span>
            </motion.label>
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
          {Employment.map((type, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={filterOptions.employmentType.includes(type)}
                onChange={() => handleEmploymentToggle(type, setFilterOptions)}
              />{" "}
              <span className="checkbox-label">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Environment mode */}
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
          {Environment.map((mode, index) => (
            <label key={index}>
              <input
                type="checkbox"
                checked={filterOptions.environment.includes(mode)}
                onChange={() => handleEnvironmentToggle(mode, setFilterOptions)}
              />{" "}
              <span className="checkbox-label">{mode}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Salary Range */}
      <div className="filter-section">
        <h4>Salary Range</h4>
        <div className="salary-range">
          <input
            type="number"
            placeholder="Min"
            value={filterOptions.salaryRange.min}
            onChange={(e) =>
              setFilterOptions({
                ...filterOptions,
                salaryRange: {
                  ...filterOptions.salaryRange,
                  min: e.target.value,
                },
              })
            }
          />
          <input
            type="number"
            placeholder="Max"
            value={filterOptions.salaryRange.max}
            onChange={(e) =>
              setFilterOptions({
                ...filterOptions,
                salaryRange: {
                  ...filterOptions.salaryRange,
                  max: e.target.value,
                },
              })
            }
          />
        </div>
      </div>

      <button
        className="apply-filters-btn"
        onClick={() => handleFilterJobs(filterOptions)}
      >
        Apply Filters
      </button>
    </aside>
  );
}
