import styled from "styled-components";
import { Container, Titulo } from "../../styles/globalStyle";
import { variables } from "../../utils/variables";

export const ContainerAdicionarContato = styled(Container)`
	height: calc(100vh - ${variables.footerHeight});
	padding-top: 32px;
	overflow-y: scroll;

	form {
		width: 100%;
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}
`;

export const TituloDaAdicao = styled(Titulo)`
	text-align: center;
`;
