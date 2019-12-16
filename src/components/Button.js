import React from "react";
import "../style/button.css";
import axios from "axios";

class Button extends React.Component {
  render() {
    const activeButton = this.props.isActive ? "button" : "button disabled";

    return (
      <button
        disabled={!this.props.isActive}
        onClick={() => {
          this.props.onClick();
        }}
        className={activeButton}
      >
        Continua
      </button>
    );
  }
}

export default Button;
