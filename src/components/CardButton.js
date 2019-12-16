import React from "react";
import "../App.css";
import axios from "axios";
import "../style/cardButton.css";

class Card extends React.Component {
  render() {
    const { answer } = this.props;

    const { title, id } = answer;
    return (
      <div className="cardButton">
        <button onClick={() => this.props.onClick()} className="title">
          {title}
        </button>
      </div>
    );
  }
}

export default Card;
