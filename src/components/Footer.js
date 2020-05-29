import React from "react";
import Menu from "./Menu";
import SocialMedia from "./SocialMedia";
import Terms from "./Terms";
import "./footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <Menu />
        <SocialMedia />
        <Terms />
      </div>
    );
  }
}

export default Footer;
