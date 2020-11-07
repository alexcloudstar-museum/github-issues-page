import React, { useState, useEffect } from 'react';
import ReactMarkDown from 'react-markdown';
import { getComments } from '../../api/';
import styled from 'styled-components';

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
  const [comments, setComments] = useState<[]>([]);

  useEffect(() => {
    getComments(commentsURL).then(res => {
      setComments(res.data);
    });
  }, [commentsURL]);

  return (
    <CommentsWrapper>
      <h3>Comments:</h3>
      {comments.map(
        (comment: { id: number; user: { login: string }; body: string }) => {
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
        }
      )}
    </CommentsWrapper>
  );
};

export default Comments;
