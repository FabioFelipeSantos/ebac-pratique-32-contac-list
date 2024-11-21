import styled from "styled-components";
import { Container } from "../../styles/globalStyle";
import { breakPoints, variables } from "../../utils/variables";

export const MainPageStyle = styled(Container)`
	@media screen and (min-width: ${breakPoints.md}) {
		display: grid;
		grid-template-columns: 28vw auto;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		display: grid;
		grid-template-columns: 25vw auto;
	}
`;

export const ListaDeContatosContainerStyle = styled.div`
	padding: 0 16px;
	height: calc(100vh - ${variables.footerHeight});
	overflow-y: scroll;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		display: none;
	}
`;
