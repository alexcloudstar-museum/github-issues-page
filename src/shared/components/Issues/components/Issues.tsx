import React, { FC, useEffect } from 'react';

import Issue from './Issue';
import { IssuesWrapper } from '../style';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';

const Issues: FC = (): JSX.Element => {
	const issues = useTypedSelector(({ issues }) =>
		issues.data?.map((issue) => issue)
	);
	const { getIssues } = useActions();

	useEffect(() => {
		getIssues();
	}, [getIssues]);

	return (
		<IssuesWrapper>
			<h1>Issues</h1>
			<Issue />
		</IssuesWrapper>
	);
};

export default Issues;
