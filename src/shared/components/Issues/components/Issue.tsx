import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCheckCircle,
	faExclamationCircle
} from '@fortawesome/free-solid-svg-icons';
import { IssueSmallText, IssueWrapper } from '../style';
import { Badge } from 'src/shared/components';

const Issue: FC = (): JSX.Element => {
	return (
		<IssueWrapper>
			<h1>
				babel-preset-react-app useESModules option no longer transpiling to ESM
				in version 10.x
			</h1>
			<Badge label="Basic" />
			<IssueSmallText>#10956 opened 1 hour ago by FjVillar</IssueSmallText>
		</IssueWrapper>
	);
};

export default Issue;
