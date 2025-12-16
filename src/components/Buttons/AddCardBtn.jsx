"use client";
import React, { useState } from "react";

const AddCardBtn = () => {
  const [inCart, setInCart] = useState(false);
  const handleAddToCart = () => {
    setInCart(true);
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-1 bg-red-500
     text-white py-2 rounded-lg text-sm 
     font-medium hover:bg-red-600 transition disabled:bg-gray-400 disabled:text-black"
    >
      {inCart ? "Added" : " Add to Cart"}
    </button>
  );
};

export default AddCardBtn;
