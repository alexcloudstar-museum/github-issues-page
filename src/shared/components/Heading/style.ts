import styled from 'styled-components';

export const StyledHeading = styled.h3`
	font-size: ${({ theme }) => theme.typography.sizes.xl};
	font-weight: ${({ theme }) => theme.typography.weight.bold};
`;
