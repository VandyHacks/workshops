import PropTypes from "prop-types"
import React from "react"

import Card from "./card"

// for styling
import "./skeleton.css"

const CardContainer = (props) => {
  let prevCard;
  const cardsHTML = props.cards.map((card, i) => {
    if(i % 2 == 1) {
      card.left = false
      prevCard.left = true
      return (
        <div className="row">
          <div className="one-half column">
            <Card {...card}/>
          </div>
          <div className="one-half column">
            <Card {...prevCard}/>
          </div>
        </div>
      ) 
    } else if (i === props.cards.length - 1) {
      card.left = false;
      return (
        <div className="row">
          <div className="one-half column">
            <Card {...card}/>
          </div>
        </div>
      ) 
    }
    prevCard = card;
  })


  return(
    <div>
      {cardsHTML}
    </div>
  );
}

CardContainer.propTypes = {
  cards: PropTypes.arrayOf(Card)
}

export default CardContainer