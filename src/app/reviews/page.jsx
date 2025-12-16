import React from "react";
import ReviewsPage from "./ReviewsComponents";
export const metadata = {
  title: "All Reviews",
  description: "healthy food by Daily-dish",
};
const reviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default reviews;
