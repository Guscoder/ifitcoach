import React from "react";
import { Link } from "react-router-dom";
import "./menu.scss";

class Menu extends React.Component {
  render() {
    return (
      <div className="menu-container">
        <div className="menu-company">
          <h2 className="menu-heading">Company</h2>
          <Link className="menu-link" to="#">
            About
          </Link>
          <Link to="#">Contact Us</Link>
          <Link to="#">Careers</Link>
        </div>
        <div className="menu-account">
          <h2 className="menu-heading">Account</h2>
          <Link to="#">Log In</Link>
          <Link to="#">Create Account</Link>
        </div>
        <div className="menu-support">
          <h2 className="menu-heading">Support</h2>
          <Link to="#">Help Center</Link>
          <Link to="#">Accessibility</Link>
        </div>
      </div>
    );
  }
}

export default Menu;
