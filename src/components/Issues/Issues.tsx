import React, { useState } from 'react';
import './Issues.scss';
import Issue from './Issue';

const Issues = () => {
  const [issues, setIssues] = useState([
    {
      id: 0,
      text: 'Progress bar when run `npm run build`',
      isOpen: true,
      number: '#8672',
      badges: [
        {
          text: 'issue: bug report',
          color: 'orange',
        },
        {
          text: 'issue: proposal',
          color: 'yellow',
        },
      ],
    },
    {
      id: 1,
      text: 'Proxy docs still outdated',
      isOpen: false,
      number: '#5292',
      badges: [
        {
          text: 'needs triage',
          color: 'red',
        },
      ],
    },
    {
      id: 2,
      text: 'Mozilla docs still outdated',
      isOpen: false,
      number: '#52922',
      badges: [
        {
          text: 'needs triage',
          color: 'red',
        },
      ],
    },
    {
      id: 3,
      text: 'Renaming file or folder breaks hot-reload',
      isOpen: true,
      number: '#52921',
      badges: [
        {
          text: 'issue: bug report',
          color: 'orange',
        },
        {
          text: 'issue: proposal',
          color: 'yellow',
        },
      ],
    },
    {
      id: 4,
      text: 'Yarn Not Starting',
      isOpen: true,
      number: '#22312',
      badges: [
        {
          text: 'issue: need triage',
          color: 'red',
        },
        {
          text: 'issue: proposal',
          color: 'yellow',
        },
      ],
    },
    {
      id: 5,
      text:
        'Images in CSS are not present in manifest but present as versioned files in the production build',
      isOpen: true,
      number: '#22312',
      badges: [
        {
          text: 'issue: proposal',
          color: 'yellow',
        },
      ],
    },
  ]);
  return (
    <div className='Issues'>
      {issues.map(issue => {
        return (
          <Issue
            key={issue.id}
            id={issue.id}
            text={issue.text}
            isOpen={issue.isOpen}
            ticketNumber={issue.number}
            badges={issue.badges}
          />
        );
      })}
    </div>
  );
};

export default Issues;
