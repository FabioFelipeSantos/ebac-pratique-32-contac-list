import styled from "styled-components";
import { colors } from "../../utils/variables";

type CardProps = {
	color: string;
};

export const CardStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${colors.bgTertiaryColor};
	border-radius: 16px;

	border: 1px solid #000;
`;

export const CardHeader = styled.div<CardProps>`
	width: 100%;
	background-color: ${(props) => props.color};

	span {
		color: ${(props) => props.color};
		filter: invert(100%) saturate(300%);
		&:hover {
			filter: hue-rotate(90deg) invert(100%);
		}
	}
`;
