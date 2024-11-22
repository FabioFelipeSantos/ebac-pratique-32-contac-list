import styled from "styled-components";
import { breakPoints, variables } from "./utils/variables";

export const FooterStyle = styled.footer`
	grid-area: 2 / 1 / 3 / 3;
	width: 100%;
	height: ${variables.footerHeight};
	padding: 12px 12px;

	background-color: hsl(260, 100%, 80%, 0.05);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

export const DataContainerStyle = styled.div`
	font-size: 14px;

	@media (min-width: ${breakPoints.sm}) {
		font-size: 16px;
	}
`;

export const FooterDireitosStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		font-size: 14px;
		margin-bottom: 12px;
	}

	@media (min-width: ${breakPoints.sm}) {
		p {
			font-size: 16px;
		}
	}
`;

export const SocialFooterContainerStyle = styled.div`
	width: 100%;
	border-top: 1px solid #0004;
	padding-top: 8px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
`;
