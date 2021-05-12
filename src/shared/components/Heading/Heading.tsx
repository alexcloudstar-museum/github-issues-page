import React, { FC } from 'react';
import { StyledHeading } from './style';

const Heading: FC = ({ children }): JSX.Element => {
	return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
