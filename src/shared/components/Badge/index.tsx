import React, { FC } from 'react';
import { BadgeWrapper, StyledBadge } from './style';

interface IBadge {
	label: string;
	bgcolor: string;
}

const Badge: FC<IBadge> = ({ label, bgcolor }): JSX.Element => {
	return (
		<BadgeWrapper>
			<StyledBadge label={label} bgcolor={bgcolor} />
		</BadgeWrapper>
	);
};

export default Badge;
