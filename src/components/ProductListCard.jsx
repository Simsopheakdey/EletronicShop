import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartProvider';

const ProductListCard = ({product, showStyle}) => {
const {addToCart} = useContext(CartContext)
  return (
    <div className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow">
        <div className={`p-4 ${showStyle === "list" && "flex gap-3 items-center"}`}>
            <div className="relative mb-2 bg-slate-100 rounded-sm">
                <img src={product.images[0]} alt="" className={`group-hover:scale-110 transition-all w-full ${showStyle == "grid" ? "h-48" : "h-36"} object-contain rounded-lg mix-blend-multiply`} />
                {product.discount > 0 && <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 absolute top-2 left-2 bg-blue-600 text-white">{product.discount}% OFF</div>}
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-9 w-9 absolute top-2 right-2 bg-white/80 hover:bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart w-4 h-4"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
            </div>
            <div className="flex-1">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-slate-100 text-secondary-foreground hover:bg-secondary/80 mb-2 text-xs">
                    {product.category}
                </div>
                <h3 className="font-semibold text-sm text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center mb-1">
                    <div className="flex text-yellow-400 mr-1 text-sm">
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
                    <p className="text-sm text-gray-500">{product.rate.toFixed(1)}</p>
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
                    <div className="flex gap-2">
                        <Link to={`/products/${product.id}`} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3">
                            View
                        </Link>
                        <button onClick={()=>addToCart(product.id, 1)} className="inline-flex items-center text-white justify-center gap-2 whitespace-nowrap text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black text-primary-foreground hover:bg-primary/90 h-8 rounded-md px-3">
                            <i className="bx bx-cart"></i> Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductListCard