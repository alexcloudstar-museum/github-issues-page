import React, { FC } from 'react';

import Issue from './Issue';
import { IssuesWrapper } from '../style';

import { IIssuesProps } from '../IssuesType';

const Issues: FC<IIssuesProps> = ({ issues }): JSX.Element => {
	return (
		<IssuesWrapper>
			<h1>Issues</h1>

			{issues?.map(
				({
					id,
					title,
					created_at,
					isOpen,
					labels,
					state,
					text,
					ticketNumber,
					user
				}) => (
					<Issue
						key={id}
						issue={{
							id,
							title,
							created_at,
							isOpen,
							labels,
							state,
							text,
							ticketNumber,
							user
						}}
					/>
				)
			)}
		</IssuesWrapper>
	);
};

export default Issues;
