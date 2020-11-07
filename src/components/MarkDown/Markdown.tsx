import React, { useState, useEffect } from 'react';
import ReactMarkDown from 'react-markdown';
import { fetchIssueReadme, renderIssueReadme } from '../../api/';

const Markdown: React.FC<MarkDownProps> = ({ repoURL }) => {
  const [issueMDURL, setIssueMDURL] = useState<string>();
  const [issueMD, setIssueMD] = useState<string>();

  useEffect(() => {
    fetchIssueReadme(repoURL).then(res => {
      setIssueMDURL(res.data.download_url);
    });

    if (issueMDURL) {
      renderIssueReadme(issueMDURL).then(res => {
        setIssueMD(res.data);
      });
    } else {
      setIssueMD("This repository don't have a MD");
    }
  }, [repoURL, issueMDURL]);

  return (
    <React.Fragment>
      <h5 style={{ fontSize: '1.5rem' }}>MD of the repository:</h5>
      {issueMD && (
        <ReactMarkDown source={issueMD} escapeHtml={true} className='issueMD' />
      )}
    </React.Fragment>
  );
};

export default Markdown;
