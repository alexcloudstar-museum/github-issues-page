import React, { FC } from 'react';
import Header from '../components/Header';
import { ContentWrapper } from '../style';

const Content: FC = (): JSX.Element => {
	return (
		<ContentWrapper>
			<Header />
		</ContentWrapper>
	);
};

export default Content;
