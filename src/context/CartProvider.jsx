import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductContext } from "./ProductProvider";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { allProducts } = useContext(ProductContext);
  const [carts, setCarts] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const fetchCartItems = async () => {
    try {
      const response = await fetch(`http://localhost:3000/carts`);
      if (!response.ok) {
        throw new Error("Failed to fetch cart items");
      }
      const data = await response.json();
      setCarts(data);
      setTotalItems(data.reduce((acc, item) => acc + item.quantity, 0));
      setTotalPrice(
        data.reduce(
          (acc, item) =>
            acc +
            (item.price * item.quantity -
              (item.price * item.quantity * item.discount) / 100),
          0
        )
      );
      setTotalAmount(
        data.reduce(
          (acc, item) =>
            acc +
            (item.price * item.quantity -
              (item.price * item.quantity * item.discount) / 100),
          0
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const userId = localStorage.getItem("id");
  const addToCart = async (id, qty) => {
    const resChecking = await fetch(`http://localhost:3000/carts/${id}`);
    if (resChecking.ok) {
      const data = await resChecking.json();
      const newProductData = { ...data, quantity: data.quantity + qty };

      await fetch(`http://localhost:3000/carts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProductData),
      });
      fetchCartItems();
    } else {
      // add to cart
      const productToAdd = allProducts.find((pro) => pro.id == id);

      await fetch(`http://localhost:3000/carts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...productToAdd,
          images: productToAdd.images[0],
          quantity: qty,
          userId
        }),
      });
      fetchCartItems();
    }
  };

  const removeCartItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/carts/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to remove cart item");
      }
      fetchCartItems();
    } catch (error) {
      console.log(error);
    }
  };

  const updateCartItem = async (id, quantity) => {
    const cartItem = carts.find((item) => item.id === id);
    if (!cartItem) {
      throw new Error("Cart item not found");
    }
    try {
      const response = await fetch(`http://localhost:3000/carts/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...cartItem,
          quantity,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to update cart item");
      }
      fetchCartItems();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <>
      <CartContext.Provider
        value={{
          carts,
          totalItems,
          totalPrice,
          totalAmount,
          removeCartItem,
          updateCartItem,
          addToCart
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;