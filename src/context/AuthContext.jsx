import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // Mocking a logged-in user for demonstration
    const [user, setUser] = useState({
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        profilePic: null, // Set to a URL for an image
        role: "job seeker",
    });

    const logout = () => {
        setUser(null);
    };

    const login = (userData) => {
        setUser(userData);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
