import React, { FC } from 'react';

import Issue from './Issue';
import { IssuesWrapper } from '../style';

const Issues = (): JSX.Element => {
	return (
		<IssuesWrapper>
			<h1>Issues</h1>
			<Issue />
		</IssuesWrapper>
	);
};

export default Issues;
