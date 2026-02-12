import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BrowseJob from "./pages/BrowseJob";
import PostJobPage from "./pages/PostjobPage";
import BrowseCompaniesPage from "./pages/BrowseCompaniesPage";
// import Pricing from "./pages/Pricing";
// import SignIn from "./pages/SignIn";
import { JobDetailsPage } from "./pages/JobDetailsPage";
import AppLayout from "./layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/jobs", element: <BrowseJob /> },
      { path: "/post-job", element: <PostJobPage /> },
      { path: "/companies", element: <BrowseCompaniesPage /> },
      //   { path: "/pricing", element: <Pricing /> },
      //   { path: "/signin", element: <SignIn /> },
      { path: "/jobs/:id", element: <JobDetailsPage /> },
    ],
  },
]);
