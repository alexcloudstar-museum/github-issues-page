import React from 'react';
import { FC } from 'react';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import { HeaderWrapper } from '../style';

const Header: FC = (): JSX.Element => {
	const issues = useTypedSelector(({ issues }) =>
		issues.data?.map((issue) => issue)
	);

	return (
		<HeaderWrapper>
			<span>{issues?.length} issues fetched</span>
		</HeaderWrapper>
	);
};

export default Header;
