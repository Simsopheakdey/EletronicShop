import { createContext, useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const register = async (userData) => {
    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        throw new Error("Failed to register");
      }
      const data = await res.json();

      localStorage.setItem("id", data.id);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const logout = () => {
    localStorage.removeItem("id");
    setIsAuthenticated(false);
  };

  const login = async (loginData) => {
    try {
      const res = await fetch(
        `http://localhost:3000/users?email=${loginData.email}`
      );
      if (!res.ok) throw new Error("Failed to login.");

      const data = await res.json();

      if (data.length == 0) {
        setError("This email is not register yet.");
        return;
      }

      if (data[0].password == loginData.password) {
        localStorage.setItem("id", data[0].id);
        setIsAuthenticated(true);
        navigate("/");
      } else {
        setError("Wrong password.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{ register, logout, login, error, isAuthenticated }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;