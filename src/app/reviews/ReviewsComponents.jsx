"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://taxi-kitchen-api.vercel.app/api/v1/reviews`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div className="mx-auto container ">
      <div className="grid grid-cols-1 py-5 md:grid-cols-5 gap-20">
        {reviews.map((rev) => (
          <ReviewCard rev={rev} key={rev.id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};
export default ReviewsPage;
