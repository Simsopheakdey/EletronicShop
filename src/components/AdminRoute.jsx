"use client"

import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import AdminDashboard from "./AdminDashboard"

const AdminRoute = () => {
  const { isAuthenticated, isAdmin } = useContext(AuthContext)

  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h2>
          <p className="text-gray-600">You need admin privileges to access this page.</p>
        </div>
      </div>
    )
  }

  return <AdminDashboard />
}

export default AdminRoute
