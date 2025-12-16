import FoodCartSkeleton from "@/components/skeletons/page";
import React from "react";

const loading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-20">
      {/* {[...Array(50)].map((_, index) => {
        <FoodCartSkeleton key={index}></FoodCartSkeleton>;
      })} */}
      loading,,,,,,,,,,,,
    </div>
  );
};

export default loading;
