import React from 'react';
import './box.css';

const Box = props => {
  return (
    <div className="container">
      <div className="title">{props.title}</div>
      <div className="time">
        {props.time} at{' '}
        {props.virtual && props.virtual === 'true' ? (
          (props.zoom && props.twitch? (
            <>
            <a className="zoom" href={props.zoom}>Zoom</a> or <a className="twitch" href={props.twitch}>Twitch</a>
            </>
          ) : (
            (props.zoom ? (
              <a className="zoom" href={props.zoom}>
                Zoom
              </a>
            ) : (
              <a className="twitch" href={props.twitch}>
                Twitch
              </a>
            ))
          )
        )) : (
          props.location
        )}
      </div>
      <div className="youtube">
        {props.youtube ? (
          <p>
            Recording at:{' '}
            <a className="youtube" href={props.youtube}>
              Youtube
            </a>
          </p>
        ) : (
          ''
        )}
      </div>
      <div className="contact">
        {props.virtual && props.slack && props.virtual === 'true' ? (
          <p>
            Join Slack (#slackbot-workshop):{' '}
            <a className="slack" href={props.slack}>
              Slack
            </a>
          </p>
        ) : (
          ''
        )}
      </div>
      <div className="register">
        {props.register ? 'Register at: ' : ''}
        <a className="register" href={props.register}>
          {props.register}
        </a>
      </div>
      <div className="topic">
        {props.topic ? (
          <p>{props.topic}: {props.languages}</p>
        ) : (
          ''
        )}
      </div>
      <div className="difficulty">
        {props.difficulty}: {props.diffnote}
      </div>
      <div className="desc">{props.description}</div>
      <div className="preqs">{props.preqs}</div>
      <div className="deps">
        {props.dependencies ? 'Dependencies' : ''} {props.dependencies}
        {props.setup ? ' Setup at: ' : ''}
        <a className="setup" href={props.setup}>
          {props.setup}
        </a>
      </div>
      <div className="github">
        <span>{props.github ? 'Code: ' : ''}</span>

        <a className="github" href={props.github}>
          {props.github}
        </a>
      </div>
      <div className="slides">
        <span>{props.slides ? 'Slides: ' : ''}</span>
        <a className="slides" href={props.slides}>
          {props.slides}
        </a>
      </div>
    </div>
  );
};

export default Box;
