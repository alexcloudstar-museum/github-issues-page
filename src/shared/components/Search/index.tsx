import React, { FC } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import { SearchWrapper } from './style';

interface ISearch {
	keyword: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<ISearch> = ({ keyword, onChange }): JSX.Element => (
	<SearchWrapper>
		<div>
			<SearchIcon />
		</div>
		<InputBase
			value={keyword}
			placeholder="Search…"
			inputProps={{ 'aria-label': 'search' }}
			onChange={onChange}
		/>
	</SearchWrapper>
);

export default Search;
