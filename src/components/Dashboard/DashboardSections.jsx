import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

export function About() {
    const { user } = useAuth();
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user?.id) {
            // Simulating a GET request to fetch user info
            setLoading(true);
            setTimeout(() => {
                // This simulates the response from a GET /api/users/{id}
                const mockData = {
                    fullName: user.name,
                    email: user.email,
                    role: user.role,
                    phone: "+1 (555) 123-4567",
                    address: "123 Tech Lane, Silicon Valley, CA",
                    bio: "Passionate software developer with 5 years of experience in React and Node.js. Looking for opportunities to build innovative products.",
                    skills: ["React", "JavaScript", "CSS", "Node.js", "Express"],
                    experience: "5 Years",
                    education: "B.S. in Computer Science"
                };
                setUserInfo(mockData);
                setLoading(false);
            }, 800);
        }
    }, [user?.id]);

    if (loading) return <div className="loading">Loading profile info...</div>;

    return (
        <div className="about-section">
            <h2>About Me</h2>
            <div className="profile-card">
                <div className="info-grid">
                    <div className="info-item">
                        <span className="label">Full Name:</span>
                        <span className="value">{userInfo.fullName}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Email:</span>
                        <span className="value">{userInfo.email}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Phone:</span>
                        <span className="value">{userInfo.phone}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Address:</span>
                        <span className="value">{userInfo.address}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Role:</span>
                        <span className="value">{userInfo.role}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Experience:</span>
                        <span className="value">{userInfo.experience}</span>
                    </div>
                </div>

                <div className="bio-section">
                    <h3>Biography</h3>
                    <p>{userInfo.bio}</p>
                </div>

                <div className="skills-section">
                    <h3>Skills</h3>
                    <div className="skills-tags">
                        {userInfo.skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const SavedJobs = () => (
    <div className="dashboard-section">
        <h2>Saved Jobs</h2>
        <div className="empty-state">
            <p>You haven't saved any jobs yet. Browse jobs to add them to your list.</p>
        </div>
    </div>
);

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
