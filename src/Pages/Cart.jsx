import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartListProduct from "../components/CartListProduct";
import { CartContext } from "../context/CartProvider";

const Cart = () => {
  const { carts, totalItems, totalPrice, totalAmount } =
    useContext(CartContext);
  return (
    <div>
      <div className="max-w-[1200px] mx-auto mb-8">
        <div className="flex items-center gap-4 my-8">
          <Link to="/products">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3">
              <i className="bx bx-arrow-back"></i> Continue Shopping
            </button>
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Shopping Carts</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-xl font-semibold leading-none tracking-tight">
                  Cart Items ({totalItems})
                </div>
              </div>
              <div className="p-0">
                <div className="divide-y divide-gray-200">
                  {carts && carts.map((item) => (
                    <CartListProduct key={item.id} cart={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="sticky top-5 rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h2 className="text-2xl font-semibold leading-none tracking-tight">
                  Order Summary
                </h2>
              </div>
              <div className="p-6 pt-0 space-y-4">
                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="shrink-0 bg-gray-500 h-[1px] w-full"></div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${totalAmount}</span>
                </div>
                <div className="space-y-3 pt-4">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-gray-900 text-white hover:bg-primary/90 h-11 rounded-md px-8 w-full">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;