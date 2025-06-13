import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await fetch("http://localhost:3000/products");
      if (!res.ok) {
        throw new Error("Failed to fetch product.");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  let categories = [];
  products &&
    products.forEach((pro) => {
      if (!categories.includes(pro.category)) {
        categories.push(pro.category);
      }
    });

  return (
    <ProductContext.Provider value={{ products, categories }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;