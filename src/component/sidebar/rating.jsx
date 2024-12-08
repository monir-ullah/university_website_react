import React from "react";

const Rating = ({ review }) => {
  const totalStars = 5; // Total number of stars
  const fullStars = Math.floor(review); // Number of completely filled stars (e.g., 4 for 4.79)

  return (
    <span className="rating">
      {Array.from({ length: totalStars }, (_, index) => {
        if (index < fullStars) {
          // Full stars (bright gold)
          return (
            <i
              key={index}
              className="icofont-ui-rating"
              //   style={{ color: "#FFD700" }} // Bright gold
              style={{ color: "#ed5e33" }} // Light gold
            ></i>
          );
        } else if (index === fullStars && review % 1 !== 0) {
          // This star is a "partial" star with a different color (light gold)
          return (
            <i
              key={index}
              className="icofont-ui-rating"
              //   style={{ color: "#FFCC00" }} // Light gold
            ></i>
          );
        } else {
          // Empty stars (gray)
          return (
            <i
              key={index}
              className="icofont-star"
              //   style={{ color: "#C0C0C0" }} // Gray
            ></i>
          );
        }
      })}
    </span>
  );
};

export default Rating;
