import { Box, Chip } from '@material-ui/core';
import styled from 'styled-components';

export const BadgeWrapper = styled(Box)``;

export const StyledBadge = styled(Chip)`
	font-size: ${({ theme }) => theme.typography.sizes.sm};
`;
