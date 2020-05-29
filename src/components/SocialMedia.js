import React from "react";
import "./socialmedia.scss";

class SocialMedia extends React.Component {
  render() {
    return (
      <div className="social-container">
        <img
          src={require("../assets/images/facebook.png")}
          alt="facebook icon"
        />
        <img
          src={require("../assets/images/instagram.png")}
          alt="facebook icon"
        />
        <img
          src={require("../assets/images/pinterest.png")}
          alt="facebook icon"
        />
        <img
          src={require("../assets/images/twitter.png")}
          alt="facebook icon"
        />
        <img
          src={require("../assets/images/youtube.png")}
          alt="facebook icon"
        />
      </div>
    );
  }
}

export default SocialMedia;
