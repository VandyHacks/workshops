import PropTypes from "prop-types"
import React, {useState} from "react"

import "./card.css"

interface Card {
  title: string,
  description: string,
  time: string,
  level: string,
  link1: string,
  link2: string,
  dependencies: string,
}

const Card = (props: {level: string; time: string; link1: string; link2: string; title: string; subtitle: string; description: string }) => {

  const [isVerbose, setVerbose] = useState(false);

  const meta = (
    <p>
      {props.time} <br/> 
      {props.level} <br/> 
      <a className="link" href={props.link1}>link1</a><br/> 
      <a className="link" href={props.link2}>link2</a><br/> 
    </p>
  )

  const getContent = (isVerbose) => 
    (isVerbose) ? (<p>{props.description}</p>) : meta
  
  
  return (
    <div className="card">

      <div className="description">
        <h1 className="title">{props.title}</h1>
        {/* <h2 className="subtitle">{props.subtitle}</h2> */}
        {getContent(isVerbose)}
      </div>

      <div className="more-button" onClick={() => setVerbose(!isVerbose)}>
        <img className="button-img" src={require('./arrow-left.png')} style={{display: (isVerbose) ? "block": "none"}}/>
        <img className="button-img" src={require('./dots-horizontal.png')} style={{display: (isVerbose) ? "none": "block"}}/>
        <div className="more"></div>
      </div>

    </div>  
  )
}

export default Card;
