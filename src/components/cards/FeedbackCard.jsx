import React from "react";

const FeedbackCard = (fb) => {
  return (
    <div className="flex border py-3 px-1 justify-between items-center">
      <h1 className="text-white text-2xl ">{fb.fb.message}</h1>
      <div className="flex gap-2.5 ">
        <button className="btn">update</button>
        <button className="btn">delete</button>
      </div>
    </div>
  );
};

export default FeedbackCard;
