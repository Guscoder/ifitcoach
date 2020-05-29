import React from "react";
import "./equipcard.scss";

class EquipCard extends React.Component {
  render() {
    console.log(this.props.equipImage);
    return (
      <div className="equip-card">
        <img
          src={require(`../assets/images/${this.props.equipImage}`)}
          alt="exercise equipment"
          className="equip-card_image"
        />

        <h2 className="equip-card_title">{this.props.title}</h2>
      </div>
    );
  }
}

export default EquipCard;
