export const handleTagToggle = (keyword, setFilterOptions) => {
  setFilterOptions((prev) => ({
    ...prev,
    tags: prev.tags.includes(keyword)
      ? prev.tags.filter((tag) => tag !== keyword) // remove
      : [...prev.tags, keyword], // add
  }));
};
export const handleExperienceToggle = (experience, setFilterOptions) => {
  setFilterOptions((prev) => ({
    ...prev,
    experience: prev.experience.includes(experience)
      ? prev.experience.filter((exp) => exp !== experience) // remove
      : [...prev.experience, experience], // add
  }));
};
export const handleEmploymentToggle = (employment, setFilterOptions) => {
  setFilterOptions((prev) => ({
    ...prev,
    employmentType: prev.employmentType.includes(employment)
      ? prev.employmentType.filter((emp) => emp !== employment) // remove
      : [...prev.employmentType, employment], // add
  }));
};
export const handleEnvironmentToggle = (environment, setFilterOptions) => {
  setFilterOptions((prev) => ({
    ...prev,
    environment: prev.environment.includes(environment)
      ? prev.environment.filter((env) => env !== environment) // remove
      : [...prev.environment, environment], // add
  }));
};

export const fetchJobs = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams();

    if (filters.location) queryParams.append("location", filters.location);
    if (filters.experience?.length > 0) {
      filters.experience.forEach(exp => queryParams.append("experience", exp));
    }
    if (filters.tags?.length > 0) {
      filters.tags.forEach(tag => queryParams.append("tags", tag));
    }
    if (filters.employmentType?.length > 0) {
      filters.employmentType.forEach(type => queryParams.append("employmentType", type));
    }
    if (filters.environment?.length > 0) {
      filters.environment.forEach(env => queryParams.append("environment", env));
    }
    if (filters.salaryRange?.min) queryParams.append("minSalary", filters.salaryRange.min);
    if (filters.salaryRange?.max && filters.salaryRange.max !== Infinity) {
      queryParams.append("maxSalary", filters.salaryRange.max);
    }

    const response = await fetch(`http://localhost:3001/api/jobs?${queryParams.toString()}`);
    if (!response.ok) throw new Error("Failed to fetch jobs");
    return await response.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
