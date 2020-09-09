import PropTypes from "prop-types"
import React, {useState} from "react"

import "./card.css"

enum difficulty {
  Beginner,
  Intermediate,
  Expert
}

interface Card {
  title: string,
  description: string,
  dependency: string,
  dependencyLink: string,
  time: string,
  difficulty: difficulty,
  level: string,
  codeLink: string,
  slidesLink: string,
  visible: boolean,
}

const Card = (props: {level: string; time: string; dependency: string; dependencyLink: string; codeLink: string; slidesLink: string; title: string; subtitle: string; description: string }) => {

  const [isVerbose, setVerbose] = useState(false);

  const meta = (
    <>
    <p>
      On <a target="_blank" className="link" href="https://www.twitch.tv/vandyhacks">Twitch</a>
    </p>
    <p>
      <b>Level</b>: {props.level}  <br/> 
      <b>Time</b>: {props.time}
    </p>
    <p>
      <i><b>Dependencies</b>: {props.dependency}
      {props.dependencyLink ?  ". Setup at: ": ""}<a target="_blank" className="link" href={props.dependencyLink }>{props.dependencyLink ?  props.dependencyLink: ""}</a></i> 
    </p>
    <p>
      <b>Code</b>: <a target="_blank" className="link" href={props.codeLink}>{props.codeLink == 'N/A' ? 'N/A': 'Code on Github'}</a><br/> 
      <b>Slides</b>: <a target="_blank" className="link"  href={props.slidesLink}>{props.slidesLink == 'N/A' ? 'N/A': 'Google Slides'}</a><br/> 
    </p>
    </>
  )

  const getContent = (isVerbose) => 
    (isVerbose) ? (<p>{props.description}</p>) : meta
  
  
  return (
    <div className="card">
      
      <div className="description">
        <h1 className="title">{props.title}</h1>
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
