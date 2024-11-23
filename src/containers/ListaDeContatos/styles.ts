import styled from "styled-components";
import { breakPoints, colors } from "../../utils/variables";

export const ListaDeContatosStyle = styled.ul`
	margin-top: 24px;
	width: 100%;
	background-color: ${colors.bgMainColor};
`;

export const InformacaoListaApresentada = styled.h3`
	margin-bottom: -12px;
	font-size: 20px;
	text-align: center;

	@media (min-width: ${breakPoints.md}) {
		font-size: 24px;
	}
`;
