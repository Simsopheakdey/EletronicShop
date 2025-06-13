import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
  const [formData, setFormData] = useState({
    id: crypto.randomUUID(), // uuid : universal unique id
    username: "",
    email: "",
    password: "",
    confirmPwd: "",
    role: "customer",
  });

  const { register } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username.trim() != "" &&
      formData.email.trim() != "" &&
      formData.password.trim() != "" &&
      formData.confirmPwd.trim() != ""
    ) {
      if (formData.password === formData.confirmPwd) {
        register({
          id: formData.id,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          role: formData.role,
        });
      } else {
        alert("Password not match.");
      }
    } else {
      alert("All Field Required.");
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-[1200px] mx-auto flex justify-center items-center py-10">
        <form className="w-[500px]" onSubmit={handleSubmit}>
          <label htmlFor="" className="text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full bg-transparent border-[1.5px] border-gray-300 rounded-sm px-3 py-1 focus:outline-blue-500 mb-3"
          />
          <label htmlFor="" className="text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-gray-300 rounded-sm px-3 py-1 focus:outline-blue-500 mb-3"
          />
          <label htmlFor="" className="text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full bg-transparent border border-gray-300 rounded-sm px-3 py-1 focus:outline-blue-500 mb-3"
          />
          <label htmlFor="" className="text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPwd"
            value={formData.confirmPwd}
            onChange={handleChange}
            className="w-full bg-transparent border border-gray-300 rounded-sm px-3 py-1 focus:outline-blue-500 mb-3"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded-md cursor-pointer">
            Register
          </button>
          <p className="text-center mt-5 text-gray-700">
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-600 underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;