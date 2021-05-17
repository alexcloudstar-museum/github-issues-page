import React, { FC, useEffect } from 'react';
import { useActions } from 'src/hooks/useActions';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { Issues } from 'src/shared/components';
import Header from '../components/Header';
import { ContentWrapper } from '../style';

const Content: FC = (): JSX.Element => {
	const issues = useTypedSelector(({ issues }) =>
		issues.data?.map((issue) => issue)
	);

	return (
		<ContentWrapper>
			<Header />
			<Issues issues={issues} />
		</ContentWrapper>
	);
};

export default Content;
