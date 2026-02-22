import { Outlet, Navigate, useLocation } from "react-router-dom";
import { Sidebar } from "../components/Dashboard/Sidebar";
import { useAuth } from "../context/AuthContext";
import "../components/Dashboard/Dashboard.css";

export default function Dashboard() {
    const { user } = useAuth();
    const location = useLocation();

    // If not logged in, redirect to signin
    if (!user) {
        return <Navigate to="/signin" replace />;
    }

    // If they are on /dashboard exactly, redirect to /dashboard/about
    if (location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
        return <Navigate to="/dashboard/about" replace />;
    }

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <main className="dashboard-content">
                <div className="dashboard-container">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
