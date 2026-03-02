import { useState, useEffect } from "react";
import { MainContent } from "../components/BrowseJobs/MainContent";
import { Sidebar } from "../components/BrowseJobs/Sidebar";
import { fetchJobs } from "../api/BrowseJobs";
import { useAuth } from "../context/AuthContext";

function BrowseJob() {
  const [jobCardsList, setJobCardsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token, user, login } = useAuth();

  useEffect(() => {
    loadJobs();
  }, []);

  async function loadJobs(filters = {}) {
    setLoading(true);
    const jobs = await fetchJobs(filters);
    setJobCardsList(jobs);
    setLoading(false);
  }

  function handleFilterJobs(filterOptions) {
    loadJobs(filterOptions);
  }

  async function handleSaveJob(jobId) {
    if (!token) return;
    try {
      const response = await fetch("http://localhost:3001/api/users/save-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ jobId })
      });
      if (response.ok) {
        const data = await response.json();
        // Update user in context
        const updatedUser = { ...user, savedJobs: data.savedJobs };
        login(updatedUser, token);
      }
    } catch (error) {
      console.error("Error saving job:", error);
    }
  }

  async function handleUnsaveJob(jobId) {
    if (!token) return;
    try {
      const response = await fetch("http://localhost:3001/api/users/unsave-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ jobId })
      });
      if (response.ok) {
        const data = await response.json();
        // Update user in context
        const updatedUser = { ...user, savedJobs: data.savedJobs };
        login(updatedUser, token);
      }
    } catch (error) {
      console.error("Error unsaving job:", error);
    }
  }

  return (
    <div className="browse-job">
      <Sidebar handleFilterJobs={handleFilterJobs} />
      {loading ? (
        <div className="loading">Loading jobs...</div>
      ) : (
        <MainContent
          jobs={jobCardsList}
          onSaveJob={handleSaveJob}
          onUnsaveJob={handleUnsaveJob}
        />
      )}
    </div>
  );
};

export default BrowseJob;