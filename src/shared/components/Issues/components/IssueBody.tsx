import React, { FC } from 'react';

interface IIssueBody {
	location: {
		state: {
			body: string;
		};
	};
}

const IssueBody: FC<IIssueBody> = ({ location }): JSX.Element => {
	return <div>{location.state.body}</div>;
};

export default IssueBody;
