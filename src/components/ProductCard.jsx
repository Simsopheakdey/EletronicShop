import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  return (
    <div className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow">
      <div className="p-4">
        <div className="relative mb-4">
          <img
            src={product.images[0]}
            alt=""
            className="group-hover:scale-105 transition-all duration-300 w-full aspect-square object-cover rounded-lg mix-blend-multiply"
          />
          {product.discount > 0 && (
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold  border-transparent hover:bg-primary/80 absolute top-2 left-2 bg-blue-600 text-white">
              {product.discount}% OFF
            </div>
          )}
        </div>
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <div className="flex text-[14px] text-yellow-500">
            {Array.from({ length: 5 }).map((_, idx) => {
                const rate = product.rate;
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
          <span className="text-[11px]">({product.rate.toFixed(1)})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="">
            {product.discount > 0 ? (
              <>
                <span className="text-sm font-bold text-gray-900">
                  ${product.price - (product.price * product.discount / 100)}
                </span>
                <span className="text-[11px] text-gray-500 line-through ml-2">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
            )}
          </div>
          <Link to={`/products/${product.id}`} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[12px] bg-gray-900 font-medium text-primary-foreground hover:bg-primary/90 text-white py-2 rounded-md px-3">
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;