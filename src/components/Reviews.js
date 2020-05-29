import React from "react";
import ReviewBox from "./ReviewBox";
import "./reviews.scss";

class Reviews extends React.Component {
  render() {
    return (
      <div className="reviews">
        <ReviewBox />
      </div>
    );
  }
}

export default Reviews;
