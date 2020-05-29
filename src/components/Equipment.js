import React from "react";
import EquipCard from "./EquipCard";
import "./equipment.scss";

class Equipment extends React.Component {
  render() {
    return (
      <div className="equipment-container">
        <h2 className="equipment-container-title">
          Interested in our exciting iFit-enabled equipment?
        </h2>
        <EquipCard equipImage="treadmill.png" title="Treadmills" />
        <EquipCard equipImage="bikeperson.png" title="Bikes" />
        <EquipCard equipImage="ellipticalperson.png" title="Ellipticals" />
        <EquipCard equipImage="6-pulley12557.png" title="Strength" />
      </div>
    );
  }
}

export default Equipment;
