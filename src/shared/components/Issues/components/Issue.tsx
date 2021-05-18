import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheckCircle,
	faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
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
		<IssueWrapper>
			<Link to={{ pathname: `/issue/${id}`, state: { body } }}>
				{state === 'open' && (
					<ErrorOutlineIcon style={{ marginRight: '10px' }} />
				)}
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
			</Link>
		</IssueWrapper>
	);
};

export default Issue;
