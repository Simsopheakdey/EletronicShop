"use client"

import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true) // Add loading state
  const navigate = useNavigate()

  // Fetch user data by ID
  const fetchUserData = async (userId) => {
    try {
      console.log("Fetching user data for ID:", userId) // Debug log
      const res = await fetch(`http://localhost:3000/users/${userId}`)
      if (!res.ok) throw new Error("Failed to fetch user data")
      const userData = await res.json()
      console.log("Fetched user data:", userData) // Debug log
      setUser(userData)
      setIsAdmin(userData.role === "admin")
      console.log("Is admin:", userData.role === "admin") // Debug log
      return userData
    } catch (error) {
      console.log(`Error fetching user data: ${error.message}`)
      return null
    }
  }

  const register = async (userData) => {
    try {
      setLoading(true)
      // Add default role if not specified
      const userDataWithRole = {
        ...userData,
        role: userData.role || "user", // Default to "user" role
      }

      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDataWithRole),
      })

      if (!res.ok) {
        throw new Error("Failed to register")
      }

      const data = await res.json()
      localStorage.setItem("id", data.id)
      setUser(data)
      setIsAuthenticated(true)
      setIsAdmin(data.role === "admin")
      setLoading(false)
      navigate("/")
    } catch (error) {
      console.log(`Error: ${error.message}`)
      setError("Registration failed. Please try again.")
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("id")
    setIsAuthenticated(false)
    setUser(null)
    setIsAdmin(false)
    setLoading(false)
    navigate("/")
  }

  const login = async (loginData) => {
    try {
      setLoading(true)
      setError("") // Clear previous errors

      const res = await fetch(`http://localhost:3000/users?email=${loginData.email}`)

      if (!res.ok) throw new Error("Failed to login.")

      const data = await res.json()

      if (data.length == 0) {
        setError("This email is not registered yet.")
        setLoading(false)
        return
      }

      if (data[0].password == loginData.password) {
        localStorage.setItem("id", data[0].id)
        setUser(data[0])
        setIsAuthenticated(true)
        setIsAdmin(data[0].role === "admin")
        console.log("Login successful, user:", data[0]) // Debug log
        console.log("Is admin after login:", data[0].role === "admin") // Debug log
        setLoading(false)
        navigate("/")
      } else {
        setError("Wrong password.")
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setError("Login failed. Please try again.")
      setLoading(false)
    }
  }

  // Check authentication status on app load
  useEffect(() => {
    const checkAuth = async () => {
      const id = localStorage.getItem("id")
      console.log("Checking auth, stored ID:", id) // Debug log

      if (id) {
        setIsAuthenticated(true)
        await fetchUserData(id) // Fetch full user data including role
      } else {
        setIsAuthenticated(false)
        setUser(null)
        setIsAdmin(false)
      }
      setLoading(false)
    }

    checkAuth()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        register,
        logout,
        login,
        error,
        isAuthenticated,
        user,
        isAdmin,
        loading,
        setError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
