import React, { FC } from 'react';
import { IBadge } from './IBadge';
import { BadgeWrapper, StyledBadge } from './style';

const Badge: FC<IBadge> = ({ label, bgcolor }): JSX.Element => (
	<BadgeWrapper>
		<StyledBadge label={label} bgcolor={bgcolor} />
	</BadgeWrapper>
);

export default Badge;
