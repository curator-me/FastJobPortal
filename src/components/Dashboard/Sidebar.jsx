import { NavLink } from "react-router-dom";
import {
    UserCircle,
    Bookmark,
    Briefcase,
    PlusSquare,
    Key,
    BarChart3
} from "lucide-react";
import "./Sidebar.css";

export function Sidebar() {
    const menuItems = [
        { name: "About", path: "about", icon: <UserCircle size={20} /> },
        { name: "Saved Job", path: "saved-jobs", icon: <Bookmark size={20} /> },
        { name: "Job Applied", path: "applied-jobs", icon: <Briefcase size={20} /> },
        { name: "Posted Job", path: "posted-jobs", icon: <PlusSquare size={20} /> },
        { name: "Reset Password", path: "reset-password", icon: <Key size={20} /> },
        { name: "Statistics", path: "statistics", icon: <BarChart3 size={20} /> },
    ];

    return (
        <div className="dashboard-sidebar">
            <div className="sidebar-header">
                <h3>Dashboard</h3>
            </div>
            <nav className="sidebar-nav">
                {menuItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={`/dashboard/${item.path}`}
                        className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}
