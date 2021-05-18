import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const IssuesWrapper = styled(Box)`
	cursor: pointer;
	transition: 0.3s all ease;
	border: 1px solid ${({ theme }) => theme.palette.primary.contrastText};

	&:hover {
		background-color: ${({ theme }) => theme.palette.primary.contrastText};
		border: 1px solid ${({ theme }) => theme.palette.common.white};
	}
`;
export const IssueWrapper = styled(Box)`
	padding: 10px;
	display: flex;
	align-items: center;

	border-bottom: 1px solid ${({ theme }) => theme.palette.primary.contrastText};

	&:hover {
		background-color: ${({ theme }) => theme.palette.primary.main};
		border: 1px solid ${({ theme }) => theme.palette.common.white};

		a,
		span,
		h1 {
			color: ${({ theme }) => theme.palette.common.white};
		}
	}

	h1 {
		margin-right: 10px;
	}

	a {
		color: ${({ theme }) => theme.palette.common.grey};
		font-size: ${({ theme }) => theme.typography.sizes.xs};
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 10px;
		text-decoration: none;
	}
`;

export const IssueSmallText = styled.span`
	color: ${({ theme }) => theme.palette.common.grey};
	font-size: ${({ theme }) => theme.typography.sizes.xs};

	margin-right: 10px;
`;
