import React, { useEffect, useState } from 'react';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { Heading } from 'src/shared';
import { Search, Spinner } from 'src/shared/components';
import { Content } from '..';
import { AppContainerWrapper } from './style';

const AppContainer = (): JSX.Element => {
	const [keyword, setKeyword] = useState('');

	const issues = useTypedSelector(({ issues }) =>
		issues.data?.map((issue) => issue)
	);
	const { getIssues } = useActions();

	useEffect(() => {
		!keyword ? getIssues('react') : getIssues(keyword);
	}, [getIssues, keyword]);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	};

	if (!issues) return <Spinner />;

	return (
		<AppContainerWrapper>
			<Heading>Simplified version of Github’s Issues page</Heading>
			<Search keyword={keyword} onChange={onChange} />
			<Content />
		</AppContainerWrapper>
	);
};

export default AppContainer;
