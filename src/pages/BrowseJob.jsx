import { MainContent } from "../components/BrowseJobs/MainContent";
import { Sidebar } from "../components/BrowseJobs/Sidebar";
import { jobCards } from "../data/jobLists";

function BrowseJob () {
  return (
    <div className="browse-job">
      <Sidebar />
      <MainContent jobs={jobCards} />
    </div>
  );
};

export default BrowseJob;