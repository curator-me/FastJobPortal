import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Phone, MapPin, Briefcase, UserCircle, ArrowRight } from "lucide-react";
import "./SigningPage.css";

export function SigningPageContent() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        // phone: "",
        // address: "",
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
        alert(`${isSignIn ? "Signed In" : "Account Created"} successfully!`);
    };

    const toggleAuthMode = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="signing-page">
            <div className="modal-overlay">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={isSignIn ? "signin" : "signup"}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="signing-card"
                    >
                        <div className="signing-header">
                            <h1 className="signing-title">
                                {isSignIn ? "Welcome Back" : "Get Started"}
                            </h1>
                            <p className="signing-subtitle">
                                {isSignIn 
                                    ? "Enter your credentials to access your account" 
                                    : "Join our community and find your next opportunity"}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="signing-form">
                            {!isSignIn && (
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <div className="input-container">
                                            <User className="input-icon" size={18} />
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
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <div className="input-container">
                                            <User className="input-icon" size={18} />
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
                                </div>
                            )}

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <div className="input-container">
                                    <Mail className="input-icon" size={18} />
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
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="input-container">
                                    <Lock className="input-icon" size={18} />
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="••••••••"
                                        className="input-field"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {!isSignIn && (
                                <>
                                    {/* <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <div className="input-container">
                                            <Phone className="input-icon" size={18} />
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="+1 (555) 000-0000"
                                                className="input-field"
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div> */}

                                    {/* <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <div className="input-container">
                                            <MapPin className="input-icon" size={18} />
                                            <textarea
                                                id="address"
                                                name="address"
                                                placeholder="City, Country"
                                                className="textarea-field"
                                                rows="1"
                                                required
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div> */}

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="accountType">Type</label>
                                            <div className="input-container">
                                                <UserCircle className="input-icon" size={18} />
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
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="employmentStatus">Status</label>
                                            <div className="input-container">
                                                <Briefcase className="input-icon" size={18} />
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
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            <button type="submit" className="submit-button">
                                {isSignIn ? "Sign In" : "Create Account"}
                                <ArrowRight size={18} />
                            </button>
                        </form>

                        <div className="signing-footer">
                            <p>
                                {isSignIn ? "Don't have an account?" : "Already have an account?"}
                                <button onClick={toggleAuthMode} className="switch-button">
                                    {isSignIn ? "Sign Up" : "Sign In"}
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

