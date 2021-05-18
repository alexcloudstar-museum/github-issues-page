import { Box, Chip } from '@material-ui/core';
import styled from 'styled-components';

export const BadgeWrapper = styled(Box)``;

export const StyledBadge = styled(Chip)<{ bgcolor: string }>`
	height: 22px !important;
	font-size: ${({ theme }) => theme.typography.sizes.xs} !important;
	background-color: ${({ bgcolor }) => `#${bgcolor}`} !important;
	margin: 0 3px;

	.MuiChip-label {
		padding-left: 8px !important;
		padding-right: 8px !important;
	}
`;
