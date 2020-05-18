import PropTypes from "prop-types"
import React from "react"

import "./card.css"

interface Card {
  title: string,
  description: string,
  imageURL: string,
  time: string,
  level: 'Beginner' | 'Intermediate' | 'Advanced',
  link1: string,
  link2: string,
  left: boolean,
  active: boolean
}

const Card = (props: { left: boolean; imageURL: string; level: string; time: string; link1: string; link2: string; title: string; subtitle: string; description: string }) => {

  const isLeft = props.left ? 'alt':''
  const classWrap = `blog-card ${isLeft}`
  
  return (
    <div className={classWrap}>
      <div className="meta">
        <div className="photo" style={{backgroundImage:`url(${props.imageURL})`}}></div>
        <ul className="details">
          <li className="author"><a href="#">{props.level}</a></li>
          <li className="date">{props.time}</li>
          <li className="tags">
            <ul>
              <li><a href="#">{props.link1}</a></li>
              <li><a href="#">{props.link2}</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        <p>{props.description}</p>
        <p className="read-more">
          <a href="#">More Props...</a>
        </p>
      </div>
    </div>  
  )
}

/* Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageURL:PropTypes.string,
  time: PropTypes.string,
  level: PropTypes.oneOf(['Beginner', 'Intermediate', 'Advanced']),
  link1: PropTypes.string,
  link2: PropTypes.string,
  left: PropTypes.bool,
} */

export default Card;
