import React, { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [allProducts, setAllProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [sortValue, setSortValue] = useState("");
  const [productDetail, setProductDetail] = useState(null);
  // Filter State
  const [categoryValue, setCategoryValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [rateValue, setRateValue] = useState(0);
  // Search State
  const [searchQuery, setSearchQuery] = useState("");

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products?${sortValue}`);
      if (!res.ok) {
        throw new Error("Failed to fetch product.");
      }
      const data = await res.json();
      setProducts(data);
      setAllProduct(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const filtereProduct = () => {
    const filteredProduct = allProducts?.filter((product) => {
      const categoryMatch =
        !categoryValue || product.category === categoryValue;
      const rateMatch = product.rate >= rateValue;
      const priceMatch =
        priceValue === 0 ||
        (priceValue === 1 && product.price < 50) ||
        (priceValue === 2 && product.price >= 50 && product.price <= 250) ||
        (priceValue === 3 && product.price > 250 && product.price <= 500) ||
        (priceValue === 4 && product.price > 500 && product.price <= 750) ||
        (priceValue === 5 && product.price > 750);

      // Search functionality - search by name and category
      const searchMatch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && rateMatch && priceMatch && searchMatch;
    });
    setProducts(filteredProduct);
  };

  const fetchProductDetail = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch product detail.");
      }
      const data = await res.json();
      setProductDetail(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  useEffect(() => {
    fetchProduct();
  }, [sortValue]);

  useEffect(() => {
    filtereProduct();
  }, [categoryValue, priceValue, rateValue, searchQuery]);

  let categories = [];
  allProducts &&
    allProducts.forEach((pro) => {
      if (!categories.includes(pro.category)) {
        categories.push(pro.category);
      }
    });

  return (
    <ProductContext.Provider
      value={{
        products,
        categories,
        setSortValue,
        setCategoryValue,
        setRateValue,
        setPriceValue,
        rateValue,
        priceValue,
        allProducts,
        productDetail,
        fetchProductDetail,
        searchQuery,
        handleSearch,
        clearSearch,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;