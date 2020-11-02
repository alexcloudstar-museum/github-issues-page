import React from "react";
import "./Issues.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";

const Issue = props => {
  return (
    <div className="Issue">
      <div className="header">
        <span className="isOpen">
          {props.isOpen ? (
            <FontAwesomeIcon icon={faCheckCircle} />
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} />
          )}
        </span>
        <h4 className="title">{props.text}</h4>
        <span className="Badges">
          {props.badges.map(badge => {
            return (
              <span
                key={props.id}
                className="Badge"
                style={{ backgroundColor: badge.color }}
              >
                {badge.text}
              </span>
            );
          })}
        </span>
      </div>
        <p>{props.number}</p>
    </div>
  );
};

export default Issue;