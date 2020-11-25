import React, { useEffect } from 'react';

// components
import Markdown from 'components/MarkDown/Markdown';
import Comments from 'components/Comments/Comments';
import Spinner from 'components/Spinner/Spinner';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { getIssue } from 'store/actions/issueAction';

const Issue: React.FC<IssueProps> = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const issueState = useSelector((state: RootState) => state.issue);

  useEffect(() => {
    dispatch(getIssue(id));
  }, [dispatch, id]);

  return (
    <>
      {issueState.loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {issueState.data?.repository_url && (
            <Markdown repoURL={issueState.data?.repository_url} />
          )}
          {issueState.data?.repository_url && (
            <Comments commentsURL={issueState.data?.comments_url} />
          )}
        </React.Fragment>
      )}
    </>
  );
};

export default Issue;
