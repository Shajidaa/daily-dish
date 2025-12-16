"use client";
import React, { createContext, useState } from "react";
export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (item) => {
    setCart([item, ...cart]);
  };
  const cartValue = {
    cart,
    addToCart,
  };
  return <CartContext value={cartValue}>{children}</CartContext>;
};

export default CartProvider;
