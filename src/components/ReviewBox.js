import React from "react";
import "./reviewbox.scss";

class Reviews extends React.Component {
  render() {
    return (
      <>
        <div className="reviewbox">
          <img
            className="review-author"
            src={require("../assets/images/mashable_logo.png")}
            alt="mashable author"
          />
          <p className="review-quote">
            “You focus on putting in the work, and the technology handles the
            rest.”
          </p>
        </div>
        <div className="reviewbox">
          <img
            className="review-author"
            src={require("../assets/images/wired_logo.png")}
            alt="wired author"
          />

          <p className="review-quote">
            “Literally transports you from home to wherever you choose to run.”
          </p>
        </div>
      </>
    );
  }
}

export default Reviews;
