import React, { useState, useEffect } from 'react';
import ReactMarkDown from 'react-markdown';
import { getComments } from '../../api/';
import './Comments.scss';

const Comments: React.FC<CommentsProps> = ({ commentsURL }) => {
  const [comments, setComments] = useState<[]>([]);

  useEffect(() => {
    getComments(commentsURL).then(res => {
      setComments(res.data);
    });
  }, [commentsURL]);

  return (
    <div className='Comments'>
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
    </div>
  );
};

export default Comments;
