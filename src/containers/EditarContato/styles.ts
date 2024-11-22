import styled from "styled-components";
import { Container, Titulo } from "../../styles/globalStyle";
import { breakPoints, colors, variables } from "../../utils/variables";

export const ContainerEditarContato = styled(Container)`
	padding-top: 32px;

	form {
		margin-top: 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 12px;
	}
`;

export const TituloDaEdicao = styled(Titulo)`
	text-align: center;
`;

export const LabelStyle = styled.label`
	font-size: 16px;
	text-align: center;

	@media screen and (min-width: ${breakPoints.sm}) {
		font-size: 18px;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		font-size: 20px;
	}
`;

export const InputStyle = styled.input`
	max-width: 500px;
	display: block;
	margin-bottom: 4px;
	width: 90%;
	font-size: 14px;
	padding: 8px 12px;
	color: #666;
	border-radius: 8px;
	border: 1px solid #aaa;

	@media screen and (min-width: ${breakPoints.sm}) {
		font-size: 16px;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		font-size: 18px;
	}
`;

export const ColorInputStyle = styled(InputStyle)`
	width: 35%;
	padding: 0;
	/* border-radius: 0; */

	&::-webkit-color-swatch-wrapper {
		padding: 0;
	}
	&::-webkit-color-swatch {
		border: none;
	}
`;

export const SocialsContainer = styled.div`
	margin: 0 6px 0 12px;
	padding-top: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 18px;
	width: 100%;
	max-width: 500px;

	div {
		width: 85%;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 6px;

		label {
			height: 24px;
		}
	}
`;

export const BotaoAlterarDadosStyle = styled.button`
	display: block;
	width: 70%;
	padding: 8px 16px;
	font-size: 20px;
	font-weight: bold;
	border: none;
	border-radius: 9999px;
	background-color: ${colors.buttonAdd};
	margin: 24px auto;
	max-width: 400px;
	cursor: pointer;

	&:hover {
		filter: brightness(102%);
	}
	&:active {
		transform: scale(1.1);
		filter: brightness(106%);
	}
`;
