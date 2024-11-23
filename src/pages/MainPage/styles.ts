import styled from "styled-components";
import { Container } from "../../styles/globalStyle";
import { breakPoints, colors, variables } from "../../utils/variables";

export const MainPageStyle = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - ${variables.footerHeight});
	overflow-y: scroll;
	scroll-behavior: smooth;

	@media screen and (min-width: ${breakPoints.md}) {
		grid-template-columns: 28vw auto;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		grid-template-columns: 18vw auto;
	}
`;

export const TituloContatosContainer = styled.div`
	width: 100%;
	margin: 20px 0 32px;
	padding-bottom: 12px;
	position: relative;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	h1 {
		font-size: 26px;
	}

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
			#000000 25% 75%,
			#00000005 90%,
			${colors.bgMainColor}
		);
	}

	@media (min-width: ${breakPoints.sm}) {
		h1 {
			font-size: 30px;
		}
	}

	@media (min-width: ${breakPoints.md}) {
		grid-area: 1 / 1 / 2 / 3;
	}

	@media (min-width: ${breakPoints.lg}) {
		h1 {
			font-size: 42px;
		}
	}
`;

export const BotaoAdicionarContatoStyle = styled.button`
	margin-right: 12px;
	font-size: 16px;
	font-weight: bold;
	padding: 9px 12px;
	background-color: ${colors.buttonAdd};
	border: none;
	border-radius: 12px;

	&:hover {
		cursor: pointer;
		filter: saturate(80%) brightness(102%);
	}

	&:active {
		transform: scale(1.06);
		filter: brightness(108%);
	}

	@media (min-width: ${breakPoints.sm}) {
		font-size: 18px;
		padding: 9px 16px;
	}

	@media (min-width: ${breakPoints.lg}) {
		font-size: 22px;
		padding: 9px 20px;
	}
`;

export const SpinStyle = styled.span`
	display: block;
	width: 100px;
	height: 100px;
	border: 6px solid #0008;
	border-right-color: transparent;
	border-radius: 50%;
	animation: spin 1s linear infinite;

	@keyframes spin {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
`;

export const FiltroESeletorContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: ${breakPoints.md}) {
		flex-direction: row;
		justify-content: space-evenly;
	}
`;

export const SelectContainer = styled.label`
	margin-left: 16px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	p {
		font-size: 16px;
		margin-bottom: 8px;
	}

	select {
		padding: 12px 24px;
		font-size: 16px;
	}

	@media screen and (min-width: ${breakPoints.md}) {
		p {
			font-size: 18px;
			margin-top: -28px;
		}

		select {
			font-size: 18px;
		}
	}
`;
