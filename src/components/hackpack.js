import React from "react";
import "./hackpack.css";

const Hackpack = props => {
    return (
        <div className='container'>
            <div className='title'>{props.topic}</div>
            <div className='desc'>{props.description}</div>
            <div>
                <span>{props.github ? "Code: " : ""}</span>
                <a className='github' href={props.github}>
                    {props.github}
                </a>
            </div>
        </div>
    );
};

export default Hackpack;
