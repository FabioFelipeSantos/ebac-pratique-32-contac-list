import styled, { createGlobalStyle } from "styled-components";
import { breakPoints } from "../utils/variables";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Host Grotesk", sans-serif;
        list-style: none;
    }

    body {
        min-height: 100vh;
    }
`;

export const Container = styled.div`
	width: 98%;
	max-width: 1240px;
	margin: 0 auto;

	@media screen and (min-width: ${breakPoints.sm}) {
		width: 96%;
	}

	@media screen and (min-width: ${breakPoints.md}) {
		width: 92%;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		width: 90%;
	}
`;

export const Titulo = styled.h2`
	font-family: "Caveat";
	font-size: 32px;

	@media screen and (min-width: ${breakPoints.sm}) {
		font-size: 38px;
	}

	@media screen and (min-width: ${breakPoints.md}) {
		font-size: 46px;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		font-size: 52px;
	}
`;
