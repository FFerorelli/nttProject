import React from "react";
import "../style/chip.css";

class Chip extends React.Component {
  render() {
    const { active, title } = this.props;

    const activeClassName = active ? "chip active" : "chip";

    return (
      <div
        className={activeClassName}
        onClick={active ? this.props.onClick : () => {}}
      >
        <span>{title}</span>
      </div>
    );
  }
}

export default Chip;
