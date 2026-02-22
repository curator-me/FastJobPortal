import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BrowseJob from "./pages/BrowseJob";
import PostJobPage from "./pages/PostjobPage";
import BrowseCompaniesPage from "./pages/BrowseCompaniesPage";
import PricingPage from "./pages/PricingPage";
import SigningPage from "./pages/SigningPage";
import Dashboard from "./pages/Dashboard";
import { JobDetailsPage } from "./pages/JobDetailsPage";
import AppLayout from "./layout/AppLayout";
import {
  About,
  SavedJobs,
  AppliedJobs,
  PostedJobs,
  ResetPassword,
  Statistics
} from "./components/Dashboard/DashboardSections";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/jobs", element: <BrowseJob /> },
      { path: "/post-job", element: <PostJobPage /> },
      { path: "/companies", element: <BrowseCompaniesPage /> },
      { path: "/pricing", element: <PricingPage /> },
      { path: "/signin", element: <SigningPage /> },
      { path: "/jobs/:id", element: <JobDetailsPage /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          { path: "about", element: <About /> },
          { path: "saved-jobs", element: <SavedJobs /> },
          { path: "applied-jobs", element: <AppliedJobs /> },
          { path: "posted-jobs", element: <PostedJobs /> },
          { path: "reset-password", element: <ResetPassword /> },
          { path: "statistics", element: <Statistics /> },
        ],
      },
    ],
  },
]);
