import React from 'react';
import './Issues.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';

const Issue: React.FC<IssueProps> = ({
  id,
  text,
  isOpen,
  ticketNumber,
  badges,
}) => {
  return (
    <div className='Issue'>
      <div className='header'>
        <span className='isOpen'>
          {isOpen ? (
            <FontAwesomeIcon icon={faCheckCircle} />
          ) : (
            <FontAwesomeIcon icon={faTimesCircle} />
          )}
        </span>
        <h4 className='title'>{text}</h4>
        <span className='Badges'>
          {badges.map(badge => {
            return (
              <span
                key={id}
                className='Badge'
                style={{ backgroundColor: badge.color }}
              >
                {badge.text}
              </span>
            );
          })}
        </span>
      </div>
      <p>{ticketNumber}</p>
    </div>
  );
};

export default Issue;
