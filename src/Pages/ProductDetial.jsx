import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductProvider";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const ProductDetial = () => {
  const { id } = useParams();
  const { productDetail, fetchProductDetail } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetchProductDetail(id);
  }, [id]);

  if (!productDetail) return <div>Loading...</div>;

  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 my-16">
          <div className="">
            <div className="border-2 rounded-lg overflow-hidden mb-4">
              <img
                src={productDetail.images[activeImage]}
                alt=""
                className="w-full h-96 object-contain rounded-lg mix-blend-multiply"
              />
            </div>
            <div className="flex gap-4 overflow-x-auto">
              {productDetail.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`min-w-32 border-2 p-2 rounded-lg overflow-hidden ${
                    activeImage === index && "border-blue-600"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-16 object-contain rounded-lg mix-blend-multiply"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="">
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {productDetail.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {Array.from({ length: 5 }).map((_, idx) => {
                      const rate = productDetail.rate;
                      if (rate >= idx + 1) {
                        // Full star
                        return <i key={idx} className="bx bxs-star"></i>;
                      } else if (rate >= idx + 0.5) {
                        // Half star
                        return <i key={idx} className="bx bxs-star-half"></i>;
                      } else {
                        // Empty star
                        return <i key={idx} className="bx bx-star"></i>;
                      }
                    })}
                  </div>
                  <div className="text-gray-600">
                    {productDetail.rate.toFixed(1)}
                  </div>
                </div>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-black text-white hover:bg-primary/80">
                  Instock
                </div>
              </div>
            </div>
            <div className="mb-6">
              {productDetail.discount > 0 ? (
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    $
                    {productDetail.price -
                      (productDetail.price * productDetail.discount) / 100}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${productDetail.price}
                  </span>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-green-100 text-green-800">
                    Save {productDetail.discount}%
                  </div>
                </div>
              ) : (
                <div className="text-3xl font-bold text-gray-900">
                  ${productDetail.price}
                </div>
              )}
            </div>
            <div className="mb-6">
              <p className="text-gray-600">{productDetail.description}</p>
            </div>
            <div className="space-y-4 mb-6">
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Color
                </label>
                <div className="flex gap-2">
                  {["red", "blue", "green", "yellow", "purple"].map(
                    (color, index) => (
                      <button
                        key={index}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-5"
                      >
                        {color}
                      </button>
                    )
                  )}
                </div>
              </div>
              <div className="">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground w-9 h-9 rounded-md"
                  >
                    <i className="bx bx-minus"></i>
                  </button>
                  <span className="text-lg font-medium text-gray-900">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground w-9 h-9 rounded-md"
                  >
                    <i className="bx bx-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4 mb-8">
              <button onClick={() => addToCart(productDetail.id, qty)} className="col-span-4 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-black text-white hover:bg-primary/90 h-11 rounded-md px-8 flex-1">
                <i className="bx bx-cart"></i> Add to Cart
              </button>
              <button className="col-span-1 inline-flex items-center justify-center gap-2 border border-gray-300 whitespace-nowrap text-sm font-medium bg-white text-black hover:bg-primary/90 h-11 rounded-md px-8 flex-1">
                <i className="bx bx-heart"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetial;