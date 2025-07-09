"use client"

import { useState } from "react"

export default function InputProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "0",
    discount: "0",
    rating: "0",
    status: "available",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      // Here you can add your API call to save the product
      console.log("Product Data:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setMessage("Product added successfully!")

      // Reset form after successful submission
      setFormData({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "0",
        discount: "0",
        rating: "0",
        status: "available",
      })
    } catch (error) {
      setMessage("Error adding product. Please try again.")
      console.error("Error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const categories = [
    "Electronics",
    "Smartphones",
    "Laptops",
    "Tablets",
    "Audio",
    "Gaming",
    "Accessories",
    "Smart Home",
    "Wearables",
    "Other",
  ]

  const statusOptions = [
    { value: "available", label: "Available", color: "#10b981" },
    { value: "out_of_stock", label: "Out of Stock", color: "#ef4444" },
    { value: "discontinued", label: "Discontinued", color: "#6b7280" },
    { value: "coming_soon", label: "Coming Soon", color: "#3b82f6" },
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < rating ? "#fbbf24" : "#d1d5db", fontSize: "1.2em" }}>
        ★
      </span>
    ))
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "10px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            🛒 Electronic Shop
          </h1>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "1.2rem" }}>Add New Product to Inventory</p>
        </div>

        {/* Success/Error Message */}
        {message && (
          <div
            style={{
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "8px",
              backgroundColor: message.includes("successfully") ? "#d1fae5" : "#fee2e2",
              color: message.includes("successfully") ? "#065f46" : "#991b1b",
              border: `1px solid ${message.includes("successfully") ? "#a7f3d0" : "#fecaca"}`,
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {message}
          </div>
        )}

        {/* Main Card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
            overflow: "hidden",
          }}
        >
          {/* Card Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              padding: "30px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                margin: "0 0 10px 0",
              }}
            >
              📦 Product Information
            </h2>
            <p style={{ margin: "0", opacity: "0.9", fontSize: "1.1rem" }}>
              Fill in the details below to add a new product
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ padding: "40px" }}>
            {/* Product Name */}
            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "10px",
                  color: "#1f2937",
                }}
              >
                📱 Product Name *
              </label>
              <input
                type="text"
                placeholder="Enter product name (e.g., iPhone 15 Pro Max)"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "15px",
                  fontSize: "1.1rem",
                  border: "3px solid #e5e7eb",
                  borderRadius: "12px",
                  outline: "none",
                  transition: "all 0.3s ease",
                  backgroundColor: "#f9fafb",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea"
                  e.target.style.backgroundColor = "white"
                  e.target.style.transform = "translateY(-2px)"
                  e.target.style.boxShadow = "0 10px 25px rgba(102, 126, 234, 0.15)"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb"
                  e.target.style.backgroundColor = "#f9fafb"
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "none"
                }}
              />
            </div>

            {/* Description */}
            <div style={{ marginBottom: "30px" }}>
              <label
                style={{
                  display: "block",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "10px",
                  color: "#1f2937",
                }}
              >
                📝 Product Description
              </label>
              <textarea
                placeholder="Describe the product features, specifications, and benefits..."
                value={formData.description}
                onChange={(e) => handleInputChange("description", e.target.value)}
                rows={5}
                style={{
                  width: "100%",
                  padding: "15px",
                  fontSize: "1.1rem",
                  border: "3px solid #e5e7eb",
                  borderRadius: "12px",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                  backgroundColor: "#f9fafb",
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#667eea"
                  e.target.style.backgroundColor = "white"
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#e5e7eb"
                  e.target.style.backgroundColor = "#f9fafb"
                }}
              />
            </div>

            {/* Category and Status Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
                marginBottom: "30px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#1f2937",
                  }}
                >
                  🏷️ Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange("category", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "1.1rem",
                    border: "3px solid #e5e7eb",
                    borderRadius: "12px",
                    outline: "none",
                    backgroundColor: "#f9fafb",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea"
                    e.target.style.backgroundColor = "white"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb"
                    e.target.style.backgroundColor = "#f9fafb"
                  }}
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#1f2937",
                  }}
                >
                  📊 Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => handleInputChange("status", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "1.1rem",
                    border: "3px solid #e5e7eb",
                    borderRadius: "12px",
                    outline: "none",
                    backgroundColor: "#f9fafb",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea"
                    e.target.style.backgroundColor = "white"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb"
                    e.target.style.backgroundColor = "#f9fafb"
                  }}
                >
                  {statusOptions.map((status) => (
                    <option key={status.value} value={status.value}>
                      {status.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price and Stock Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
                marginBottom: "30px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#1f2937",
                  }}
                >
                  💰 Price ($) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder="0.00"
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "1.1rem",
                    border: "3px solid #e5e7eb",
                    borderRadius: "12px",
                    outline: "none",
                    backgroundColor: "#f9fafb",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea"
                    e.target.style.backgroundColor = "white"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb"
                    e.target.style.backgroundColor = "#f9fafb"
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#1f2937",
                  }}
                >
                  📦 Stock Quantity
                </label>
                <input
                  type="number"
                  min="0"
                  placeholder="0"
                  value={formData.stock}
                  onChange={(e) => handleInputChange("stock", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "1.1rem",
                    border: "3px solid #e5e7eb",
                    borderRadius: "12px",
                    outline: "none",
                    backgroundColor: "#f9fafb",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea"
                    e.target.style.backgroundColor = "white"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb"
                    e.target.style.backgroundColor = "#f9fafb"
                  }}
                />
              </div>
            </div>

            {/* Discount and Rating Row */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "30px",
                marginBottom: "30px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#1f2937",
                  }}
                >
                  🏷️ Discount (%)
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  placeholder="0"
                  value={formData.discount}
                  onChange={(e) => handleInputChange("discount", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "1.1rem",
                    border: "3px solid #e5e7eb",
                    borderRadius: "12px",
                    outline: "none",
                    backgroundColor: "#f9fafb",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea"
                    e.target.style.backgroundColor = "white"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb"
                    e.target.style.backgroundColor = "#f9fafb"
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                    color: "#1f2937",
                  }}
                >
                  ⭐ Initial Rating (1-5)
                </label>
                <select
                  value={formData.rating}
                  onChange={(e) => handleInputChange("rating", e.target.value)}
                  style={{
                    width: "100%",
                    padding: "15px",
                    fontSize: "1.1rem",
                    border: "3px solid #e5e7eb",
                    borderRadius: "12px",
                    outline: "none",
                    backgroundColor: "#f9fafb",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea"
                    e.target.style.backgroundColor = "white"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb"
                    e.target.style.backgroundColor = "#f9fafb"
                  }}
                >
                  <option value="0">Select rating</option>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating.toString()}>
                      {rating} stars
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preview Section */}
            {formData.name && (
              <div
                style={{
                  marginTop: "40px",
                  padding: "25px",
                  background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
                  borderRadius: "15px",
                  border: "2px solid #0ea5e9",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    marginBottom: "20px",
                    color: "#0c4a6e",
                    textAlign: "center",
                  }}
                >
                  📋 Product Preview
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px",
                    fontSize: "1rem",
                  }}
                >
                  <div style={{ padding: "10px", backgroundColor: "white", borderRadius: "8px" }}>
                    <strong>📱 Name:</strong> {formData.name}
                  </div>
                  <div style={{ padding: "10px", backgroundColor: "white", borderRadius: "8px" }}>
                    <strong>🏷️ Category:</strong> {formData.category || "Not specified"}
                  </div>
                  <div style={{ padding: "10px", backgroundColor: "white", borderRadius: "8px" }}>
                    <strong>💰 Price:</strong> ${formData.price || "0.00"}
                  </div>
                  <div style={{ padding: "10px", backgroundColor: "white", borderRadius: "8px" }}>
                    <strong>📦 Stock:</strong> {formData.stock} items
                  </div>
                  <div style={{ padding: "10px", backgroundColor: "white", borderRadius: "8px" }}>
                    <strong>🏷️ Discount:</strong> {formData.discount}%
                  </div>
                  <div
                    style={{
                      padding: "10px",
                      backgroundColor: "white",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <strong>📊 Status:</strong>
                    <span
                      style={{
                        padding: "4px 12px",
                        borderRadius: "20px",
                        backgroundColor: statusOptions.find((s) => s.value === formData.status)?.color || "#6b7280",
                        color: "white",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                      }}
                    >
                      {statusOptions.find((s) => s.value === formData.status)?.label}
                    </span>
                  </div>
                  {formData.rating > 0 && (
                    <div
                      style={{
                        padding: "10px",
                        backgroundColor: "white",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <strong>⭐ Rating:</strong>
                      {renderStars(Number.parseInt(formData.rating))}
                    </div>
                  )}
                </div>
                {formData.description && (
                  <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "white", borderRadius: "8px" }}>
                    <strong>📝 Description:</strong>
                    <p style={{ color: "#4b5563", marginTop: "8px", margin: "8px 0 0 0", lineHeight: "1.6" }}>
                      {formData.description}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Form Buttons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginTop: "40px",
                padding: "30px",
                background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
                margin: "40px -40px -40px -40px",
                borderRadius: "0 0 20px 20px",
              }}
            >
              <button
                type="button"
                style={{
                  flex: "1",
                  padding: "15px 30px",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  border: "3px solid #d1d5db",
                  borderRadius: "12px",
                  backgroundColor: "white",
                  color: "#374151",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#f3f4f6"
                  e.target.style.transform = "translateY(-2px)"
                  e.target.style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)"
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "white"
                  e.target.style.transform = "translateY(0)"
                  e.target.style.boxShadow = "none"
                }}
              >
                ❌ Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  flex: "1",
                  padding: "15px 30px",
                  fontSize: "1.1rem",
                  fontWeight: "700",
                  border: "none",
                  borderRadius: "12px",
                  background: isSubmitting
                    ? "linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)"
                    : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.target.style.background = "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)"
                    e.target.style.transform = "translateY(-2px)"
                    e.target.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.4)"
                  }
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) {
                    e.target.style.background = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    e.target.style.transform = "translateY(0)"
                    e.target.style.boxShadow = "none"
                  }
                }}
              >
                {isSubmitting ? "⏳ Saving..." : "💾 Save Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
