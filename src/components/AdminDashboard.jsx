"use client"

import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../context/AuthProvider"
import { ProductContext } from "../context/ProductProvider"

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext)
  const { allProducts } = useContext(ProductContext)
  const [products, setProducts] = useState([])

  console.log("AdminDashboard - user:", user) // Debug log
  console.log("AdminDashboard - allProducts:", allProducts) // Debug log

  useEffect(() => {
    setProducts(allProducts || [])
  }, [allProducts])

  const handleRefresh = () => {
    setProducts(allProducts || [])
  }

  const handleNewProduct = () => {
    window.location.href = "/add-product"
  }

  const handleBackToSite = () => {
    window.location.href = "/products"
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-6 border-b border-blue-500">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <i className="bx bx-user text-xl"></i>
            </div>
            <div>
              <h3 className="font-semibold">{user?.name || user?.email || "Admin User"}</h3>
              <p className="text-blue-200 text-sm">Admin User</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <h4 className="text-blue-200 text-sm font-medium mb-4">Main Menu</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-700 text-white">
                <i className="bx bx-package text-lg"></i>
                <span>Product</span>
              </a>
            </li>
            <li>
              <button
                onClick={handleBackToSite}
                className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors text-left"
              >
                <i className="bx bx-store text-lg"></i>
                <span>View Site</span>
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-500">
          <button
            onClick={logout}
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors text-left"
          >
            <i className="bx bx-log-out text-lg"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Admin Dashboard</h2>
            <div className="text-sm text-gray-600">Welcome, {user?.name || user?.email || "Admin"}</div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-900">Product List</h1>
                <div className="flex space-x-3">
                  <button
                    onClick={handleRefresh}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Refresh
                  </button>
                  <button
                    onClick={handleNewProduct}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    New Product
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-4">Total Products: {products.length}</p>

              {products.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No products found</p>
                </div>
              ) : (
                <div className="grid gap-4">
                  {products.slice(0, 5).map((product, index) => (
                    <div key={product.id || index} className="border rounded-lg p-4 flex items-center space-x-4">
                      <img
                        src={product.image || "https://via.placeholder.com/50"}
                        alt={product.title || product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{product.title || product.name || "Unnamed Product"}</h3>
                        <p className="text-gray-600">${product.price || "0.00"}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <i className="bx bx-edit text-lg"></i>
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <i className="bx bx-trash text-lg"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
