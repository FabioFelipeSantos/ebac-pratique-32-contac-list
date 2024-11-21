import styled from "styled-components";
import { breakPoints } from "../../utils/variables";

export const SocialItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 6px;

	h4 {
		font-size: 14px;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		h4 {
			font-size: 16px;
		}
	}
`;
