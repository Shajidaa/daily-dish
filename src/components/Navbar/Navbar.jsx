import Link from "next/link";
import React from "react";
import LoginButton from "../LoginButton";
import AuthButton from "../Buttons/AuthButton";

const Navbar = () => {
  return (
    <header className=" bg-amber-900">
      <div className="flex justify-between items-center py-3 container mx-auto">
        <div>
          <Link href="/" className="text-2xl font-bold">
            Daily-Dish
          </Link>{" "}
        </div>
        <div>
          <Link className="btn mr-5" href={"/foods"}>
            Foods
          </Link>
          <Link className="btn" href={"/reviews"}>
            Review
          </Link>
          <Link className="btn" href={"/feedback"}>
            Feedback
          </Link>
          <Link className="btn" href={"/register"}>
            Register
          </Link>
          <AuthButton></AuthButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
