import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const { login, error } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full bg-gradient-to-br from-pink-50 to-blue-50">
      <div className="max-w-[1200px] mx-auto flex justify-center items-center py-24">
        <form className="w-[500px]" onSubmit={handleSubmit}>
          {error && (
            <p className="border py-2 rounded-md text-center text-red-500">
              {error}
            </p>
          )}
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
          <button className="w-full bg-blue-600 text-white py-2 rounded-md cursor-pointer">
            Login
          </button>
          <p className="text-center mt-5 text-gray-700">
            Don't have an account?{" "}
            <Link to={"/register"} className="text-blue-600 underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;