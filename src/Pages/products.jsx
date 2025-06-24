import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductProvider";
import ProductListCard from "../components/ProductListCard";

const Product = () => {
  const {
    categories,
    products,
    setSortValue,
    setCategoryValue,
    setRateValue,
    setPriceValue,
    rateValue,
    priceValue,
    searchQuery,
    clearSearch,
  } = useContext(ProductContext);
  const [showStyle, setShowStyle] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  let productsPerPage = 9;

  // Reset to first page when search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const handleChange = (cate) => {
    if (selectedCategory === cate) {
      setSelectedCategory("");
      setCategoryValue(cate);
    } else {
      setSelectedCategory(cate);
      setCategoryValue(cate);
    }
  };

  return (
    <div className="bg-slate-50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-4 gap-5 py-8">
          <div className="col-span-1">
            <div className="bg-white p-2 px-3 rounded-lg shadow-md border sticky top-5">
              <h2 className="flex items-center gap-2 text-[16px] text-gray-700">
                <i className="bx bx-filter-alt"></i> Filter
              </h2>
              <div className="mt-3">
                <p className="text-sm font-medium mb-3">Category</p>
                <div className="flex flex-col gap-1">
                  {categories.map((cate) => (
                    <div key={cate} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="w-3 h-3 checked:bg-black"
                        onChange={() => handleChange(cate)}
                        checked={cate == selectedCategory}
                        id={cate}
                        name="category"
                      />
                      <label htmlFor={cate} className="font-medium text-xs">
                        {cate}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium mb-3">Price</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-3 h-3 checked:bg-black"
                      onChange={() => setPriceValue(priceValue === 1 ? 0 : 1)}
                      checked={priceValue === 1}
                    />
                    <label className="font-medium text-xs">Under 50$</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-3 h-3 checked:bg-black"
                      onChange={() => setPriceValue(priceValue === 2 ? 0 : 2)}
                      checked={priceValue === 2}
                    />
                    <label className="font-medium text-xs">50$ - 250$</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-3 h-3 checked:bg-black"
                      onChange={() => setPriceValue(priceValue === 3 ? 0 : 3)}
                      checked={priceValue === 3}
                    />
                    <label className="font-medium text-xs">250$ - 500$</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-3 h-3 checked:bg-black"
                      onChange={() => setPriceValue(priceValue === 4 ? 0 : 4)}
                      checked={priceValue === 4}
                    />
                    <label className="font-medium text-xs">500$ - 750$</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-3 h-3 checked:bg-black"
                      onChange={() => setPriceValue(priceValue === 5 ? 0 : 5)}
                      checked={priceValue === 5}
                    />
                    <label className="font-medium text-xs">Over 750$</label>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-sm font-medium mb-3">Rate</p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <input
                      onChange={() => setRateValue(4)}
                      type="checkbox"
                      checked={rateValue === 4}
                      className="w-3 h-3 checked:bg-black"
                    />
                    <label className="font-medium text-xs flex items-center">
                      <i className="bx bxs-star text-[11px] text-yellow-500"></i>
                      <i className="bx bxs-star text-[11px] text-yellow-500"></i>
                      <i className="bx bxs-star text-[11px] text-yellow-500"></i>
                      <i className="bx bxs-star text-[11px] text-yellow-500"></i>
                      <span className="text-[11px] ml-1">& Up</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      onChange={() => setRateValue(3)}
                      type="checkbox"
                      checked={rateValue === 3}
                      className="w-3 h-3 checked:bg-black"
                    />
                    <label className="font-medium text-xs flex items-center">
                      <i className="bx bxs-star text-[11px] text-yellow-500"></i>
                      <i className="bx bxs-star text-[11px] text-yellow-500"></i>
                      <i className="bx bxs-star text-[11px] text-yellow-500"></i>
                      <span className="text-[11px] ml-1">& Up</span>
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      onChange={() => setRateValue(2)}
                      type="checkbox"
                      checked={rateValue === 2}
                      className="w-3 h-3 checked:bg-black"
                    />
                    <label className="font-medium text-xs flex items-center">
                      <i className="bx bxs-star text-[11px] text-yellow-500"></i>
                      <i className="bx bxs-star text-[11px] text-yellow-500"></i>
                      <span className="text-[11px] ml-1">& Up</span>
                    </label>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    onChange={() => setRateValue(1)}
                    type="checkbox"
                    checked={rateValue === 1}
                    className="w-3 h-3 checked:bg-black"
                  />
                  <label className="font-medium text-xs flex items-center">
                    <i className="bx bxs-star text-[11px] text-yellow-500"></i>
                    <span className="text-[11px] ml-1">& Up</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="">
                <h1 className="text-xl font-bold text-gray-900">
                  {searchQuery
                    ? `Search Results for "${searchQuery}"`
                    : "All Products"}
                </h1>
                <p className="text-sm text-gray-600">
                  Showing{" "}
                  {Math.min(
                    productsPerPage * currentPage,
                    products?.length || 0
                  )}{" "}
                  of {products && products.length} results
                </p>
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="text-sm text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"
                  >
                    <i className="bx bx-x text-lg"></i>
                    Clear search
                  </button>
                )}
              </div>
              <div className="flex items-center gap-4">
                <select
                  onChange={(e) => setSortValue(e.target.value)}
                  className="flex items-center bg-white text-gray-600 justify-between rounded-md border border-input px-3 py-2 text-xs ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-48"
                >
                  <option value="">Sort by: Price: Default</option>
                  <option value="_sort=price">
                    Sort by: Price: Low to High
                  </option>
                  <option value="_sort=-price">
                    Sort by: Price: High to Low
                  </option>
                </select>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setShowStyle("grid")}
                    className={`${
                      showStyle == "grid" && "bg-black"
                    } inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3 rounded-r-none`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={showStyle == "grid" ? "white" : "black"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-grid3x3 w-4 h-4"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M3 15h18" />
                      <path d="M9 3v18" />
                      <path d="M15 3v18" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setShowStyle("list")}
                    className={`${
                      showStyle == "list" && "bg-black"
                    } inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground hover:bg-primary/90 h-8 rounded-md rounded-l-none px-3`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={showStyle == "list" ? "white" : "black"}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-list w-4 h-4"
                    >
                      <path d="M3 12h.01" />
                      <path d="M3 18h.01" />
                      <path d="M3 6h.01" />
                      <path d="M8 12h13" />
                      <path d="M8 18h13" />
                      <path d="M8 6h13" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`grid ${
                showStyle == "grid"
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              } gap-6`}
            >
              {products && products.length > 0 ? (
                products
                  .slice(
                    (currentPage - 1) * productsPerPage,
                    currentPage * productsPerPage
                  )
                  .map((product) => (
                    <ProductListCard
                      key={product.id}
                      product={product}
                      showStyle={showStyle}
                    />
                  ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="text-gray-500">
                    <i className="bx bx-search text-6xl mb-4"></i>
                    <h3 className="text-xl font-medium mb-2">
                      {searchQuery
                        ? `No products found for "${searchQuery}"`
                        : "No products available"}
                    </h3>
                    <p className="text-sm">
                      {searchQuery
                        ? "Try adjusting your search terms or browse all products"
                        : "Please check back later"}
                    </p>
                    {searchQuery && (
                      <button
                        onClick={clearSearch}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                      >
                        Browse All Products
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Pagination */}
            {products && products.length > productsPerPage && (
              <div className="flex justify-center items-center gap-7 mt-10">
                <button
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  Previous
                </button>
                <button
                  disabled={currentPage * productsPerPage > products?.length}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="bg-white inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;