import FoodCard from "@/components/cards/page";
import React from "react";
import CartItems from "./CartItems";

const getFoods = async () => {
  const res = await fetch(
    ` https://taxi-kitchen-api.vercel.app/api/v1/foods/random`
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return data.foods || [];
};
export default async function foods() {
  const foods = await getFoods();

  return (
    <div className=" container mx-auto">
      {" "}
      <h2 className="text-2xl font-semibold py-5 ">
        {" "}
        Total Food : <span className="text-amber-500">({foods.length}) </span>
      </h2>
      <div className="flex  gap-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          {foods.map((food) => (
            <FoodCard food={food} key={food.id}></FoodCard>
          ))}
        </div>
        <div className="w-[250] rounded-2xl border border-amber-50">
          <h2 className="text-2xl font-bold text-center py-3">Cart Items</h2>
          <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
}
