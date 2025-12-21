"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AddFeedbackFrom = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.feedback.value;
    const res = await fetch(`http://localhost:3000/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    console.log(data);

    if (data.insertedId) {
      alert("success");
      router.push("/feedback");
    }
  };
  return (
    <div className="flex justify-center items-center">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <textarea
          name="feedback"
          id=""
          required
          className="border-white text-black bg-white "
          cols="100"
          rows="10"
        ></textarea>
        <button type="submit" className="btn">
          {" "}
          Add
        </button>
      </form>
    </div>
  );
};

export default AddFeedbackFrom;
