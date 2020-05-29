import React from "react";
import { Link } from "react-router-dom";
import SignupButton from "./SignupButton";
import "./header.scss";

class Header extends React.Component {
  render() {
    return (
      <nav className="nav-header">
        <div className="nav-top">
          <Link to="#">Blog</Link>
          <Link to="#">Nourish</Link>
          <Link to="#">Shop</Link>
        </div>
        <div className="nav-bottom">
          <img
            className="ifit-coach-img"
            src={require("../assets/images/ifit-coach.png")}
            alt="ifit coach icon"
          />
          <div className="nav-bottom-links">
            <Link to="#">exercise</Link>
            <Link to="#">nutrition</Link>
            <Link to="#">activity</Link>
            <Link to="#">sleep</Link>
          </div>
          <SignupButton text="Sign up" />
        </div>
      </nav>
    );
  }
}

export default Header;
