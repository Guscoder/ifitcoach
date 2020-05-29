import React from "react";
import "./hero.scss";
import SignupButton from "./SignupButton";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <p className="hero-title">
          The best personal training, right in your own home
        </p>
        <SignupButton text="join ifit coach" />
      </div>
    );
  }
}

export default Hero;
