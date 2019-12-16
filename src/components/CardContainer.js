import React from 'react';
import '../App.css';
import'../style/cardContainer.css'
import Card from './Card';
import CardButton from './CardButton';





class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
  }
    }
  
  render() {
    const {
      answers,
      question
    } = this.props




    const cards = answers.map((answer, index) => {
      if (answer.image) {
        return <Card
          key={index}
          answer={answer}
          onClick={() => this.props.selectCard(index)}
              />       
      }
      else return   <CardButton
                    key={index}
                    answer={answer}
                    onClick = {() => this.props.selectCard(index)}
              />
    })

    const classCardsContainer = answers[0].image
    ? "step-cards-container"
    : "step-cards-container-button";
    
  
    
    return (
      <div>
      <div className="titolo">
        <h2>{question}</h2>
        </div>
      {/* <div className="step-cards-container">

        {cards}

      </div> */}
      <div className={classCardsContainer}>{cards}</div>
      
      </div>
    )
  }
}
export default CardContainer;