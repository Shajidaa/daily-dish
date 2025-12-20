import AddFeedbackFrom from "@/components/AddFeedbackFrom";
import React from "react";

const addFeedback = () => {
  return (
    <div className="mx-auto container py-6 ">
      <h2 className="text-2xl font-bold text-center">Add feedback</h2>
      <AddFeedbackFrom></AddFeedbackFrom>
    </div>
  );
};

export default addFeedback;
