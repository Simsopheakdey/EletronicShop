import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/Register";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Product from "../Pages/products";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
};

export default AppRouter;