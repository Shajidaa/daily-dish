"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  return (
    <div>
      {" "}
      <h3 className="text-center py-2 font-medium text-lg">
        <span className="text-amber-600 font-bold px-2">({cart.length})</span>
        Cart add
      </h3>
    </div>
  );
};

export default CartItems;
