import styled from "styled-components";
import { Container } from "../../styles/globalStyle";
import { breakPoints } from "../../utils/variables";

export const MainPageStyle = styled(Container)`
	border: 1px solid #f00;

	@media screen and (min-width: ${breakPoints.md}) {
		display: grid;
		grid-template-columns: 28vw auto;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		display: grid;
		grid-template-columns: 25vw auto;
	}
`;
