import React, { FC } from 'react';
import { BadgeWrapper, StyledBadge } from './style';

interface IBadge {
	label: string;
}

const Badge: FC<IBadge> = ({ label }): JSX.Element => {
	return (
		<BadgeWrapper>
			<StyledBadge label={label} />
		</BadgeWrapper>
	);
};

export default Badge;
