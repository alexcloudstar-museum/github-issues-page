import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getIssues, setLoading } from 'store/actions/issuesAction';
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

const Issues: React.FC<IssuesProps> = ({ issues }): JSX.Element => {
  const dispatch = useDispatch();
  const issuesData = useSelector((state: RootState) => state.issues);

  useEffect(() => {
    dispatch(getIssues());
    console.log(issuesData);
  }, [dispatch]);

  return (
    <>
      {issuesData.loading ? (
        <Spinner />
      ) : (
        <IssuesWrapper>
          {issuesData.data &&
            issuesData.data.map(
              ({ id, state, title, labels, created_at, user }) => {
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
              }
            )}
        </IssuesWrapper>
      )}
    </>
  );
};

export default Issues;
