import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { CartContext } from "../context/CartProvider";
import { ProductContext } from "../context/ProductProvider";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { totalItems } = useContext(CartContext);
  const { handleSearch } = useContext(ProductContext);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      handleSearch(searchInput.trim());
      navigate("/products");
    }
  };

  return (
    <div className="w-full border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center bg-white py-3">
        <div className="">
          <h1 className="text-xl font-bold text-blue-600">eTrade</h1>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link
              to="/"
              className="text-sm text-gray-700 hover:text-blue-600 px-2 py-3"
            >
              Home
            </Link>
          </li>
        
          <li>
            <Link
              to="/products"
              className="text-sm text-gray-700 hover:text-blue-600 px-2 py-3"
            >
             Shop
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-sm text-gray-700 hover:text-blue-600 px-2 py-3"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-sm text-gray-700 hover:text-blue-600 px-2 py-3"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className=" flex items-center gap-3">
          <form className="me-3" onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="border-[0.5px] text-gray-500 border-gray-300 rounded-sm outline-[0.5px] focus:outline-blue-500 px-2 py-[7px] text-[12px] w-[230px]"
            />
          </form>

          {isAuthenticated ? (
            <>
              <button>
                <i className="bx bx-heart text-gray-700 text-xl"></i>
              </button>
              <Link to={"/cart"} className="relative">
                <i className="bx bx-cart text-gray-700 text-xl"></i>
                <span className="absolute top-[-2px] right-[-4px] bg-gray-900 text-white text-[10px] rounded-full px-[5px]">
                  {totalItems}
                </span>
              </Link>
              <button>
                <i className="bx bx-user text-gray-700 text-xl"></i>
              </button>
              <button onClick={logout}>
                <i className="bx bx-log-out text-gray-700 text-xl"></i>
              </button>
            </>
          ) : (
            <>
              <Link to={"/login"}>Login</Link>
              <Link to={"/register"}>Register</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;