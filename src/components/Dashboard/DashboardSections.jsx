import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { MainContent } from "../BrowseJobs/MainContent";

export function About() {
    const { user, token } = useAuth();
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.id && token) {
            setLoading(true);
            fetch(`http://localhost:3001/api/users/${user.id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUserInfo(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user?.id, token]);

    if (loading) return <div className="loading">Loading profile info...</div>;
    if (!userInfo) return <div>Error loading user info</div>;

    return (
        <div className="about-section">
            <h2>About Me</h2>
            <div className="profile-card">
                <div className="info-grid">
                    <div className="info-item">
                        <span className="label">Full Name:</span>
                        <span className="value">{userInfo.firstName} {userInfo.lastName}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Email:</span>
                        <span className="value">{userInfo.email}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Phone:</span>
                        <span className="value">{userInfo.phoneNumber || "N/A"}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Address:</span>
                        <span className="value">{userInfo.Address || "N/A"}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Account Type:</span>
                        <span className="value">{userInfo.AccountType}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Employment Status:</span>
                        <span className="value">{userInfo.employmentStatus}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const SavedJobs = () => {
    const { user, token, login } = useAuth();
    const [savedJobs, setSavedJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.id && token) {
            setLoading(true);
            fetch(`http://localhost:3001/api/users/${user.id}`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setSavedJobs(data.savedJobs || []);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err);
                    setLoading(false);
                });
        }
    }, [user?.id, token]);

    const handleUnsaveJob = async (jobId) => {
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
                setSavedJobs(prev => prev.filter(job => (job._id || job.id) !== jobId));
                // Update user in context
                const updatedUser = { ...user, savedJobs: data.savedJobs };
                login(updatedUser, token);
            }
        } catch (error) {
            console.error("Error unsaving job:", error);
        }
    };

    if (loading) return <div className="loading">Loading saved jobs...</div>;

    return (
        <div className="dashboard-section">
            <h2>Saved Jobs</h2>
            {savedJobs.length === 0 ? (
                <div className="empty-state">
                    <p>You haven't saved any jobs yet. Browse jobs to add them to your list.</p>
                </div>
            ) : (
                <MainContent
                    jobs={savedJobs}
                    onUnsaveJob={handleUnsaveJob}
                    onSaveJob={() => { }} // Won't be needed here as they are already saved
                />
            )}
        </div>
    );
};

export const AppliedJobs = () => (
    <div className="dashboard-section">
        <h2>Applied Jobs</h2>
        <div className="empty-state">
            <p>You haven't applied to any jobs yet. Start your career journey today!</p>
        </div>
    </div>
);

export const PostedJobs = () => (
    <div className="dashboard-section">
        <h2>Posted Jobs</h2>
        <div className="empty-state">
            <p>You haven't posted any jobs. Switch to employer account to post jobs.</p>
        </div>
    </div>
);

export const ResetPassword = () => (
    <div className="dashboard-section">
        <h2>Reset Password</h2>
        <form className="reset-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label>Current Password</label>
                <input type="password" placeholder="Enter current password" />
            </div>
            <div className="form-group">
                <label>New Password</label>
                <input type="password" placeholder="Enter new password" />
            </div>
            <div className="form-group">
                <label>Confirm New Password</label>
                <input type="password" placeholder="Confirm new password" />
            </div>
            <button className="submit-button">Update Password</button>
        </form>
    </div>
);

export const Statistics = () => (
    <div className="dashboard-section">
        <h2>Statistics</h2>
        <div className="stats-grid">
            <div className="stat-card">
                <h4>Jobs Clicked</h4>
                <div className="value">42</div>
            </div>
            <div className="stat-card">
                <h4>Jobs Viewed</h4>
                <div className="value">128</div>
            </div>
            <div className="stat-card">
                <h4>Profile Views</h4>
                <div className="value">15</div>
            </div>
        </div>
    </div>
);
