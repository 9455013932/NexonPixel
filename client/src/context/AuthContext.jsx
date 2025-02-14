import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  
  const [isAuthenticated, setIsAuthenticated] = useState(null);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/auth/users/me", {
          withCredentials: true,  
        });
        console.log("Fetched User Data:", data);

        if (data) {
          setUser(data);
          setIsAuthenticated(true);
        }
      } catch (error) {
        setUser(null);
        setIsAuthenticated(false); 
        console.log("Not logged in:", error?.response?.data?.message || error.message);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    console.log("isAuthenticated updated:", isAuthenticated);
  }, [isAuthenticated]); 
  // Function to login user
  const login = async (formData) => {
    try {
      const { data } = await axios.post("http://localhost:5000/auth/users/login", formData, {
        withCredentials: true,
      });
      console.log(data)
      if (data.success && data.user) {
        setUser(data.user);
        setIsAuthenticated(true); 
        
        console.log(isAuthenticated)
        return { success: true, message: data.message ,role:data.user.role};
      }

      return { success: false, message: data.message };
    } catch (error) {
      return {
        success: false,
        message: error?.response?.data?.message || error.message || "Login failed",
      };
    }
  };

  // Function to logout user
  const  logout = async () => {
    try {
      await axios.post("http://localhost:5000/auth/users/logout", {}, { withCredentials: true });
      document.cookie="authToken=; expires=Thu,01 Jan 1970 00 :00:00 UTC ; path=/;";
      setUser(null);
      setIsAuthenticated(false);
      window.location.href='/';  
    } catch (error) {
      console.log("Logout failed:", error?.response?.data?.message || error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,isAuthenticated,role:user?.role }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;




