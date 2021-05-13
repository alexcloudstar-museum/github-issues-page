import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const IssuesWrapper = styled(Box)`
	padding: 10px;
	cursor: pointer;
	transition: 0.3s all ease;
	border: 1px solid ${({ theme }) => theme.palette.primary.contrastText};

	&:hover {
		background-color: ${({ theme }) => theme.palette.primary.contrastText};
		border: 1px solid ${({ theme }) => theme.palette.common.white};
	}
`;
export const IssueWrapper = styled(Box)``;

export const IssueSmallText = styled.span`
	color: ${({ theme }) => theme.palette.common.grey};
	font-size: ${({ theme }) => theme.typography.sizes.xs};
`;
