import React from "react";
import Select from "react-select";
import "./languagemenu.scss";

const languages = [
  { label: "English", value: "English" },
  { label: "Swedish", value: "Swedish" },
  { label: "German", value: "German" },
  { label: "Czech", value: "Czech" },
  { label: "Chinese", value: "Chinese" },
  { label: "Spanish", value: "Spanish" },
];

class LanguageMenu extends React.Component {
  state = {};
  state = {
    selectedOption: "English",
  };

  handleChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({ selectedOption });
  };
  render() {
    return (
      <div className="language-container">
        <Select
          className="language-options"
          classNamePrefix="mySelect"
          placeholder={this.state.selectedOption}
          options={languages}
          onChange={this.handleChange}
          value={this.state.selectedOption}
        />
      </div>
    );
  }
}
export default LanguageMenu;
