import styled from "styled-components";
import { breakPoints, colors, variables } from "../../utils/variables";

export const BarraLateralStyle = styled.div`
	padding: 0px 0 24px;
	background-color: ${colors.bgSecondColor};
	height: calc(100vh - ${variables.footerHeight});
	overflow-y: scroll;
	scroll-behavior: smooth;
	display: none;

	&::-webkit-scrollbar {
		display: none;
	}

	@media screen and (min-width: ${breakPoints.md}) {
		display: block;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		display: block;
	}
`;

export const ItemSeletor = styled.li`
	width: 100%;
	padding: 12px 0;
	border-bottom: 1px solid #0003;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 12px;

	&:last-child {
		border-bottom: none;
	}

	button {
		width: 74%;
		max-width: 220px;
		padding: 6px 2px;
		border: none;
		border-radius: 6px;
		background-color: ${colors.buttonSelect};
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
		&:hover {
			filter: brightness(105%);
		}

		@media screen and (min-width: ${breakPoints.md}) {
			width: 75%;
		}

		@media screen and (min-width: ${breakPoints.lg}) {
			width: 70%;
		}
	}
`;
