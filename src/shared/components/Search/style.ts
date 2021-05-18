import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const SearchWrapper = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
	border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
`;
