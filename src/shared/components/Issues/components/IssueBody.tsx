import React, { FC } from 'react';
import { Markdown } from 'src/shared/components';

interface IIssueBody {
	location: {
		state: {
			body: string;
		};
	};
}

const IssueBody: FC<IIssueBody> = ({ location }): JSX.Element => {
	return <Markdown body={location.state.body} />;
};

export default IssueBody;
