import React from "react";
import "./signupbutton.scss";

class SignupButton extends React.Component {
  render() {
    return <button className="signup-button">{this.props.text}</button>;
  }
}

export default SignupButton;
