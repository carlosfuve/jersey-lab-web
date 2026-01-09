import { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("authToken") || null);


    const isTokenValid = (token) => {
        try {
            const decoded = jwtDecode(token);
            const currentTime = Date.now() / 1000;
            return decoded.exp > currentTime;
        } catch {
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setToken(null);
    };

    const login = (newToken) => {
        localStorage.setItem("authToken", newToken);
        setToken(newToken);
    };

    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken && isTokenValid(storedToken)) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setToken(storedToken);
        } else {
            logout();
        }
    }, []);

    const isAuthenticated = () => {
        return !!token && isTokenValid(token)
    }


    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);