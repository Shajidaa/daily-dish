import FoodCard from "@/components/cards/page";
import React from "react";

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
      <div className="grid grid-cols-1 md:grid-cols-5 gap-20">
        {foods.map((food) => (
          <FoodCard food={food} key={food.id}></FoodCard>
        ))}
      </div>
    </div>
  );
}
