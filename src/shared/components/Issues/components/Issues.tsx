import React, { FC } from 'react';

import Issue from './Issue';
import { IssuesWrapper } from '../style';

import { IIssuesProps } from '../IssuesType';

const Issues: FC<IIssuesProps> = ({ issues }): JSX.Element => (
	<IssuesWrapper>
		{issues?.map(
			({ id, title, created_at, labels, ticketNumber, user, state, body }) => (
				<Issue
					key={id}
					issue={{
						id,
						title,
						created_at,
						labels,
						ticketNumber,
						user,
						state,
						body
					}}
				/>
			)
		)}
	</IssuesWrapper>
);

export default Issues;
