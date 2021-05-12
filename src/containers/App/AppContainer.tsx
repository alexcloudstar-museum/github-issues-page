import React from 'react';
import { Heading } from 'src/shared';
import { Content } from '..';
import { AppContainerWrapper } from './style';

const AppContainer = (): JSX.Element => {
	return (
		<AppContainerWrapper>
			<Heading>Simplified version of Github’s Issues page</Heading>
			<Content />
		</AppContainerWrapper>
	);
};

export default AppContainer;
