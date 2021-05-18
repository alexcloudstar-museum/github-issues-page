import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheckCircle,
	faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { IssueSmallText, IssueWrapper } from '../style';
import { Badge } from 'src/shared/components';
import { IIssueProps } from '../IssuesType';
import { DateTime } from 'luxon';
import { Link } from 'react-router-dom';

const Issue: FC<IIssueProps> = ({ issue }): JSX.Element => {
	const {
		id,
		title,
		created_at,
		labels,
		ticketNumber,
		user,
		state,
		body
	} = issue;

	return (
		<Link to={{ pathname: `/issue/${id}`, state: { body } }}>
			<IssueWrapper>
				<h1>{title}</h1>
				<IssueSmallText>
					{ticketNumber} on{' '}
					{DateTime.fromISO(created_at).toLocaleString(DateTime.DATE_SHORT)} by{' '}
					{user.login}
				</IssueSmallText>
				{labels &&
					labels.map((label) => (
						<Badge key={label.name} label={label.name} bgcolor={label.color} />
					))}
			</IssueWrapper>
		</Link>
	);
};

export default Issue;
