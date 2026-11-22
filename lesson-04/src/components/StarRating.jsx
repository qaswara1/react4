import { useState } from "react";
import "./StarRating.css";

function StarRating() {
  const [rating, setRating] = useState(0);

  function handleClick(star) {
    // לחיצה שוב על אותו כוכב מאפסת את הדירוג
    setRating(rating === star ? 0 : star);
  }

  return (
    <div className="star-rating">
      <span>הדירוג שלי:</span>
      <span className="star-rating__stars" dir="ltr">
        {[1, 2, 3, 4, 5].map(star => (
          <button
            key={star}
            className="star-rating__star"
            onClick={() => handleClick(star)}
          >
            {star <= rating ? "★" : "☆"}
          </button>
        ))}
      </span>
    </div>
  );
}

export default StarRating;
