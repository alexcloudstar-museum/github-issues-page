import React, { useEffect, useState } from 'react';

import Markdown from '../MarkDown/Markdown';
import Comments from '../Comments/Comments';

import { getIssues } from '../../api';
import Spinner from '../Spinner/Spinner';

const Issue: React.FC<IssueProps> = ({ match }) => {
  const [issue, setIssue] = useState<issueProps>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getIssues().then(res => {
      res.map((resIssues: any) => {
        if (resIssues.id === match.params.id * 1) {
          setIssue(resIssues);
        }
        return '';
      });
    });
    setLoading(false);
  }, [match.params.id]);

  return (
    <>
      {isLoading || issue === undefined || issue === null ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {issue && <Markdown repoURL={issue.repository_url} />}
          {issue && <Comments commentsURL={issue.comments_url} />}
        </React.Fragment>
      )}
    </>
  );
};

export default Issue;
