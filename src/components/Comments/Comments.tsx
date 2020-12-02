import React, { useMemo } from 'react';
import ReactMarkDown from 'react-markdown';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getCommentsAction } from 'store/actions/commentsAction';
import Spinner from 'components/Spinner/Spinner';

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: left;

  h3 {
    font-size: 20px;
  }

  &.CommentBody {
    border: 1px solid #f7f7f7;
    padding: 20px 15px;
    margin: 10px 0px;
    background: #f7f7f7;

    &.User {
      text-transform: capitalize;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Comments: React.FC<CommentsProps> = ({ commentsURL }) => {
  const dispatch = useDispatch();
  const commentsState = useSelector((state: RootState) => state.comments);

  useMemo(() => dispatch(getCommentsAction(commentsURL)), [
    dispatch,
    commentsURL,
  ]);

  return (
    <>
      {commentsState.loading ? (
        <Spinner />
      ) : (
        <CommentsWrapper>
          <h3 style={{ color: 'red' }}>Comments:</h3>
          {commentsState.data &&
            commentsState.data.map((comment: any) => {
              return (
                <React.Fragment key={comment.id}>
                  <div className='CommentBody'>
                    <span className='User'>{comment.user.login}</span>
                    <ReactMarkDown
                      source={comment.body}
                      escapeHtml={true}
                      className='CommentsMarkDown'
                    />
                  </div>
                </React.Fragment>
              );
            })}
        </CommentsWrapper>
      )}
    </>
  );
};

export default React.memo(Comments);
