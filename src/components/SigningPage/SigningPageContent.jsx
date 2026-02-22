import { useState } from "react";
import "./SigningPage.css";

export function SigningPageContent() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        accountType: "job seeker",
        employmentStatus: "Unemployed",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Account created successfully!");
    };

    return (
        <div className="signing-page">
            <div className="signing-card">
                <h1 className="signing-title">Create Your Account</h1>
                <p className="signing-subtitle">Join us to find your dream job or the perfect candidate</p>

                <form onSubmit={handleSubmit} className="signing-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="John"
                                className="input-field"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Doe"
                                className="input-field"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="john.doe@example.com"
                            className="input-field"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number (Optional)</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+1 (555) 000-0000"
                            className="input-field"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="123 Street Name, City, Country"
                            className="textarea-field"
                            rows="3"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="accountType">Account Type</label>
                            <select
                                id="accountType"
                                name="accountType"
                                className="select-field"
                                value={formData.accountType}
                                onChange={handleChange}
                            >
                                <option value="job seeker">Job Seeker</option>
                                <option value="employer">Employer</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="employmentStatus">Employment Status</label>
                            <select
                                id="employmentStatus"
                                name="employmentStatus"
                                className="select-field"
                                value={formData.employmentStatus}
                                onChange={handleChange}
                            >
                                <option value="Unemployed">Unemployed</option>
                                <option value="Employed">Employed</option>
                                <option value="Student">Student</option>
                                <option value="Freelancer">Freelancer</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="submit-button">
                        Sign Up
                    </button>
                </form>

                <p className="signing-footer">
                    Already have an account? <a href="/signin">Sign In</a>
                </p>
            </div>
        </div>
    );
}
