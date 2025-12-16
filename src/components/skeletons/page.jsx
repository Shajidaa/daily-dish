import React from "react";

export default function FoodCartSkeleton() {
  return (
    <div className="w-64 bg-red-600 rounded-xl overflow-hidden shadow-md animate-pulse">
      {/* Image */}
      <div className="w-full h-40 bg-gray-300"></div>

      <div className="p-4 space-y-3">
        {/* Title */}
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>

        {/* Category */}
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>

        {/* Price */}
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <div className="h-9 bg-gray-300 rounded-lg flex-1"></div>
          <div className="h-9 bg-gray-300 rounded-lg flex-1"></div>
        </div>
      </div>
    </div>
  );
}
