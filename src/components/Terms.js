import React from "react";
import { Link } from "react-router-dom";
import LanguageMenu from "./LanguageMenu";
import "./terms.scss";

class Terms extends React.Component {
  render() {
    return (
      <div className="terms-container">
        <LanguageMenu />
        <div className="terms">
          <Link to="#"> &copy;iFit.com. All Rights Reserved</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Use</Link>
        </div>
      </div>
    );
  }
}

export default Terms;
