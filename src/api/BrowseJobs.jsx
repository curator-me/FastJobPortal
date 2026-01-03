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
