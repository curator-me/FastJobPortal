import { useState } from "react";
import { MainContent } from "../components/BrowseJobs/MainContent";
import { Sidebar } from "../components/BrowseJobs/Sidebar";
import { jobCards } from "../data/jobLists";

function BrowseJob () {
  const [jobCardsList, setJobCardsList] = useState(jobCards);

  function handleFilterJobs(filterOptions) {
    console.log(filterOptions);
    // Filtering logic here
  }

  return (
    <div className="browse-job">
      <Sidebar handleFilterJobs={handleFilterJobs} />
      <MainContent jobs={jobCardsList} />
    </div>
  );
};

export default BrowseJob;