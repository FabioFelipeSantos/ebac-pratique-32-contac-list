import styled from "styled-components";
import { colors } from "../../utils/variables";
import { Titulo } from "../../styles/globalStyle";

export const ListaDeContatosStyle = styled.div`
	width: 100%;
	background-color: ${colors.bgMainColor};
`;

export const TituloContatos = styled(Titulo)`
	margin-bottom: 32px;
	padding-bottom: 4px;
	position: relative;

	&::before {
		width: 100%;
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		height: 3px;
		background-image: linear-gradient(
			90deg,
			#00000000,
			#00000030 6% 10%,
			#000000 25% 45%,
			#00000005 85%,
			${colors.bgMainColor}
		);
	}
`;
