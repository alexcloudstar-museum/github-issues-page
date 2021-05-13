import React from 'react';
import { FC } from 'react';
import { HeaderWrapper } from '../style';

import {
	faCheck,
	faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: FC = (): JSX.Element => {
	return (
		<HeaderWrapper>
			<span>
				<FontAwesomeIcon icon={faExclamationCircle} />
				100 Open
			</span>
			<span>
				<FontAwesomeIcon icon={faCheck} />
				100 Closed
			</span>
		</HeaderWrapper>
	);
};

export default Header;
