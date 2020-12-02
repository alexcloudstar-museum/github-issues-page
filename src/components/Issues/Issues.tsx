import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

// components
import Spinner from 'components/Spinner/Spinner';

const IssuesWrapper = styled.div`
  height: 100%;
  border: 1px solid #ccc;

  .Issue {
    background-color: #f6f8fa;
    padding: 10px 15px;
    border-bottom: 1px solid #ccc;

    .header {
      margin-bottom: 10px;
      .status {
        .fa-exclamation-circle {
          color: #eb4034;
        }
      }
      h5 {
        font-size: 18px;
        margin: 0 5px 0 5px;
      }
    }

    .labels {
      .label {
        margin: 0 5px;
        padding: 3px;
      }
    }

    .infoTicket {
      color: #586069;
    }
  }

  .issueMD {
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: left;
    background: #fbfbfb;
    padding: 15px;
  }

  @media (max-width: 767px) {
    .issueMD {
      width: 100%;
      padding: 0;
    }
  }
`;

const Issues: React.FC<IssuesProps> = (data, loading): JSX.Element => {
  const { issues } = data;

  return (
    <>
      {data.loading ? (
        <Spinner />
      ) : (
        <IssuesWrapper>
          {issues &&
            issues.map((issue: any) => {
              return (
                <div className='Issue' key={issue.id}>
                  <Link
                    to={{
                      pathname: `/issue/${issue.id}`,
                    }}
                  >
                    <div className='header d-inline'>
                      <span className='status'>
                        {issue.state === 'open' ? (
                          <FontAwesomeIcon icon={faExclamationCircle} />
                        ) : (
                          <FontAwesomeIcon icon={faCheckCircle} />
                        )}
                      </span>
                      <h5 className='title d-inline'>{issue.title}</h5>
                    </div>
                  </Link>
                  <div className='labels d-inline'>
                    {issue.labels.length &&
                      issue.labels.map((label: any) => {
                        return (
                          <span
                            key={label.id}
                            style={{ backgroundColor: `#${label.color}` }}
                            className='label'
                          >
                            {issue.name}
                          </span>
                        );
                      })}
                  </div>
                  <div className='infoTicket'>
                    <span className='id'>#{issue.id} </span>
                    <span className='createdAt'>
                      {' '}
                      opened {issue.created_at}{' '}
                    </span>
                    <span className='by'> by {issue.user.login}</span>
                  </div>
                </div>
              );
            })}
        </IssuesWrapper>
      )}
    </>
  );
};

export default Issues;
