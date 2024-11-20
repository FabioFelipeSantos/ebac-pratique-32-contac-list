import styled from "styled-components";
import { breakPoints } from "../../utils/variables";

type Props = {
	fromMain: boolean;
};

export const FiltroStyle = styled.div<Props>`
	width: 100%;
	margin-bottom: 24px;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	label {
		margin-bottom: 12px;
	}

	input {
		width: 100%;
		padding: 6px 8px;
		font-size: 16px;
		border-radius: 8px;
		border: 1px solid #0005;
	}

	@media screen and (min-width: ${breakPoints.md}) {
		display: ${(props) => (props.fromMain ? "none" : "flex")};
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		display: ${(props) => (props.fromMain ? "none" : "flex")};
	}
`;
