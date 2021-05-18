import styled from 'styled-components';

export const ContentWrapper = styled.div`
	margin-top: 2rem;
	height: 100%;
	width: 100%;
	color: #fff;
	background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const HeaderWrapper = styled.div`
	background: ${({ theme }) => theme.palette.primary.contrastText};
	padding: 10px;

	span {
		margin-right: 10px;

		svg {
			margin-right: 5px;
		}
	}
`;
