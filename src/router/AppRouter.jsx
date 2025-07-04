import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../Pages/Register"
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../Pages/products"
import Cart from "../pages/Cart";
import ProductDetial from "../Pages/ProductDetial"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetial />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRouter;