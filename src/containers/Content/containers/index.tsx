import React, { FC } from 'react';
import { Issues } from 'src/shared/components';
import Header from '../components/Header';
import { ContentWrapper } from '../style';

const Content: FC = (): JSX.Element => {
	return (
		<ContentWrapper>
			<Header />
			<Issues />
		</ContentWrapper>
	);
};

export default Content;
