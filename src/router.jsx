import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import BrowseJob from "./pages/BrowseJob";
// import PostJob from "./pages/PostJob";
// import Companies from "./pages/Companies";
// import Pricing from "./pages/Pricing";
// import SignIn from "./pages/SignIn";
import AppLayout from "./layout/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/jobs", element: <BrowseJob /> },
      //   { path: "/post-job", element: <PostJob /> },
      //   { path: "/companies", element: <Companies /> },
      //   { path: "/pricing", element: <Pricing /> },
      //   { path: "/signin", element: <SignIn /> },
    ],
  },
]);
