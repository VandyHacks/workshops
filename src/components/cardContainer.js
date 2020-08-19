import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import Card from "./card"

// for styling
import "./skeleton.css"


const CardRow = styled.div`
  margin: 3rem;
  @media (max-width: 550px) {
    margin: 0;
  }
`

const createCards = (cards) => cards.map( card => (
  <div className="one-third column" key = {card.title}>
     <Card {...card}/>
  </div>
))

const CardContainer = (props) => {

  const cardsHTML = props.cards.map((card, i) => {
    if((i + 1) % 3 === 0) {
      return (
        <CardRow className="row" key={i}>
          {createCards(props.cards.slice(i - 2, i + 1))}
        </CardRow>
      ) 
    } else if (i === props.cards.length - 1 ) {
      return (
        <CardRow className="row" key={i}>
         {createCards(props.cards.slice(Math.floor(i / 3) * 3, props.cards.length))}
        </CardRow>
      ) 
    }
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