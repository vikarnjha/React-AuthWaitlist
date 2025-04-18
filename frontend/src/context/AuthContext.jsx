import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


// Create the context
const AuthContext = createContext();

// Auth provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // holds the user info
  const [loading, setLoading] = useState(true); // for initial loading

  // Verify user on page load
  useEffect(() => {
    axios
      .get("https://react-authwaitlist.onrender.com/api/auth", { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
