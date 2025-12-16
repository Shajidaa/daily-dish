import Link from "next/link";
import AddCardBtn from "../Buttons/AddCardBtn";

// FoodCard.jsx
export default function FoodCard({ food }) {
  return (
    <div className="w-64 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
      <img
        src={food.foodImg}
        alt={food.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg text-black font-semibold">{food.title}</h3>
        <p className="text-sm text-gray-500">{food.category}</p>

        <div className="mt-2">
          <span className="text-lg font-bold text-red-500">₹{food.price}</span>
        </div>

        <div className="mt-4 flex gap-2">
          <AddCardBtn></AddCardBtn>
          <Link
            href={`/foods/${food.id}`}
            className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
