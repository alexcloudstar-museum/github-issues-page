import React from 'react';
import './Issues.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const Issues: React.FC<IssuesProps> = ({ issues }) => {
  return (
    <div className='Issues'>
      {issues.map(({ id, state, title, labels, created_at, user }) => {
        return (
          <div className='Issue' key={id}>
            <Link
              to={{
                pathname: `/issue/${id}`,
              }}
            >
              <div className='header d-inline'>
                <span className='status'>
                  {state === 'open' ? (
                    <FontAwesomeIcon icon={faExclamationCircle} />
                  ) : (
                    <FontAwesomeIcon icon={faCheckCircle} />
                  )}
                </span>
                <h5 className='title d-inline'>{title}</h5>
              </div>
            </Link>
            <div className='labels d-inline'>
              {labels.length
                ? labels.map(({ id, color, name }) => {
                    return (
                      <span
                        key={id}
                        style={{ backgroundColor: `#${color}` }}
                        className='label'
                      >
                        {name}
                      </span>
                    );
                  })
                : null}
            </div>
            <div className='infoTicket'>
              <span className='id'>#{id} </span>
              <span className='createdAt'> opened {created_at} </span>
              <span className='by'> by {user.login}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Issues;
