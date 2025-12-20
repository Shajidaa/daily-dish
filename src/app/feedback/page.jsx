import React from "react";

import FeedbackCard from "@/components/cards/FeedbackCard";
const getFeedbacks = async () => {
  const res = await fetch(`http://localhost:3000/api/feedback`);
  return await res.json();
};
const feedbackPage = async () => {
  const feedback = await getFeedbacks();

  return (
    <div className="container mx-auto">
      <h2 className="py-3 text-2xl font-bold"> {feedback.length} found</h2>
      <div className="flex flex-col gap-2.5 ">
        {feedback.map((fb) => (
          <FeedbackCard key={fb.id} fb={fb}></FeedbackCard>
        ))}
      </div>
    </div>
  );
};

export default feedbackPage;
