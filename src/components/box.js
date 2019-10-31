import React from "react";
import "./box.css";
const Box = props => {
    return (
        <div className='container'>
            <div className='title'>{props.title}</div>
            <div className='time'>{props.time}</div>

            <div className='topic'>
                {props.topic} {props.languages}
            </div>
            <div className='difficulty'>
                {props.difficulty} {props.diffnote}
            </div>
            <div className='desc'>{props.description}</div>
            <div className='preqs'>{props.preqs}</div>
            <div>
                <span>{props.github ? "Code: " : ""}</span>

                <a className='github' href={props.github}>
                    {props.github}
                </a>
            </div>
            <div>
                <span>{props.slides ? "Slides: " : ""}</span>
                <a className='github' href={props.slides}>
                    {props.slides}
                </a>
            </div>
        </div>
    );
};

export default Box;
