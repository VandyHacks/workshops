import React from "react";
import "./box.css";
const Box = props => {
    return (
        <div className='container'>
            <div className='title'>{props.title}</div>
            <div className='topic'>
                {props.topic} - {props.difficulty}
            </div>
            <div className='time'>{props.time}</div>
            <div className='desc'>{props.description}</div>
            <div className='preqs'>{props.preqs}</div>
            <div className='github'>{props.github}</div>
            <a className='github' href={props.slides}>
                {props.slides}
            </a>
        </div>
    );
};

export default Box;
