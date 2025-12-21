import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
export function generateStaticParams() {
  return [{ id: "52861" }, { id: "52950" }, { id: "53028" }];
}
export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const { details } = await res.json();
  return {
    title: details.title,
  };
}
const singleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`
  );
  const data = await res.json();
  return data.details;
};
const page = async ({ params }) => {
  const { id } = await params;
  const food = await singleFood(id);
  if (!food.title) {
    redirect("/foods");
  }
  return (
    <div className="container mx-auto">
      {/* Image Section */}
      <div>
        <div className=" rounded-2xl shadow-lg mb-6">
          {/* <img
            src={food.foodImg}
            alt={food.title}
            fill
            className="object-cover"
            priority
          /> */}
          <Image
            src={food.foodImg}
            alt={food.title}
            className="object-cover"
            priority
            width={400}
            height={400}
          ></Image>
        </div>

        <div className="">
          {food.video && (
            <a
              href={food.video}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-red-600 text-white text-center py-3 rounded-lg font-medium hover:bg-red-700 transition flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Recipe
            </a>
          )}
          <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Order Now - ${food.price}
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {food.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center gap-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                />
              </svg>
              {food.area}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              {food.category}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm">
          <div>
            <p className="text-sm text-gray-600">Price</p>
            <p className="text-3xl font-bold text-gray-900">${food.price}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Category ID</p>
            <p className="text-lg font-semibold text-gray-900">{food.catId}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Food Details</h3>
          <dl className="space-y-3">
            <div className="flex justify-between py-2 border-b">
              <dt className="text-gray-600">Food ID</dt>
              <dd className="font-medium">{food.id}</dd>
            </div>
            <div className="flex justify-between py-2 border-b">
              <dt className="text-gray-600">Category</dt>
              <dd className="font-medium">{food.category}</dd>
            </div>
            <div className="flex justify-between py-2 border-b">
              <dt className="text-gray-600">Cuisine</dt>
              <dd className="font-medium">{food.area}</dd>
            </div>
            <div className="flex justify-between py-2">
              <dt className="text-gray-600">Availability</dt>
              <dd className="font-medium text-green-600">In Stock</dd>
            </div>
          </dl>
        </div>

        <div className="pt-4">
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg">
            Add to Cart - ${food.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
