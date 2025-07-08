import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { allProducts, categories } = useContext(ProductContext);

  return (
    <>
      <div className="">
        <div className="w-full bg-slate-100">
          <div className="max-w-[1200px] m-auto py-6">
            <div className="grid grid-cols-2">
              <div className="flex flex-col justify-center items-start">
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent mb-4 bg-pink-100 text-pink-600 hover:bg-pink-100">
                  Best Deal In This Week
                </span>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  iPhone 15 Pro Max
                </h2>
                <div className="flex items-center gap-2">
                  <div className="flex text-lg text-yellow-600">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                  <span>(4.5)</span>
                </div>
                <span className="text-3xl font-bold text-blue-600 mb-8 mt-5">
                  $1299
                </span>
               {/* <--! <button className="text-[12px] px-6 py-3 rounded-md text-white bg-blue-600">
                   Now
                </button>!--> */}
              </div>
              <div className=" flex justify-center items-center">
                <img
                  className="w-4/5 mix-blend-multiply"
                  src="https://bizweb.dktcdn.net/100/517/334/products/ip-15-pro-max-mhm-16837fc55e3c49e58d4b71a49cc5a920-1024x1024-7763584d-6ee4-48c5-aab5-e3d7bbde8f3e.jpg?v=1716308537983"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="max-w-[1200px] m-auto py-10">
          <div className="flex justify-between items-center">
            <div className="">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent mb-2 bg-purple-100 text-purple-600 hover:bg-purple-100">
                Category
              </span>
              <h2 className="text-[27px] font-bold text-gray-900">
                Trending Categories
              </h2>
            </div>
            <Link to={"/products"} className="inline-flex items-center justify-center hover:bg-white gap-2 whitespace-nowrap rounded-md text-[13px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2">
              View All Product
            </Link>
          </div>
          <div className="flex gap-5 items-center mt-6 overflow-x-scroll hideScrollBar">
            {categories.map((cate) => (
              <Link
                key={cate}
                to={`/products/${cate.toLowerCase()}`}
                className="min-w-[130px] shadow-sm hover:shadow-lg transition-all rounded-lg flex flex-col gap-1 justify-center items-center aspect-square border"
              >
                <img
                  className="w-2/3 mix-blend-multiply"
                  src="https://bizweb.dktcdn.net/100/517/334/products/ip-15-pro-max-mhm-16837fc55e3c49e58d4b71a49cc5a920-1024x1024-7763584d-6ee4-48c5-aab5-e3d7bbde8f3e.jpg?v=1716308537983"
                  alt=""
                />
                <h3 className="text-sm text-gray-600 line-clamp-1">{cate}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-50">
        <div className="max-w-[1200px] m-auto py-10">
          <div className="flex justify-between items-center">
            <div className="">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold border-transparent mb-2 bg-purple-100 text-purple-600 hover:bg-purple-100">
                Our Products
              </span>
              <h2 className="text-[27px] font-bold text-gray-900">
                Explore Our Products
              </h2>
            </div>
            <Link to={"/products"} className="inline-flex items-center justify-center hover:bg-white gap-2 whitespace-nowrap rounded-md text-[13px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground px-4 py-2">
              View All Product
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {!allProducts ? (
              <p>Empty Product</p>
            ) : (
              allProducts
                .slice(0, 8)
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;