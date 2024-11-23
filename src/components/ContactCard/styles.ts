import styled from "styled-components";
import { breakPoints, colors } from "../../utils/variables";
import { Titulo } from "../../styles/globalStyle";

type CardProps = {
	color: string;
};

export const CardStyle = styled.div`
	max-width: 600px;
	width: 100%;
	display: flex;
	margin: 22px auto;
	box-shadow: 0 5px 12px -8px #000;
	flex-direction: column;
	align-items: center;
	background-color: ${colors.bgTertiaryColor};
	border-radius: 16px;
	position: relative;
`;

export const CardHeader = styled.div<CardProps>`
	width: 100%;
	height: 120px;
	background-color: ${(props) => props.color};
	border-radius: 16px 16px 0 0;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (min-width: ${breakPoints.md}) {
		height: 140px;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		height: 160px;
	}

	span {
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20px;
		color: "";
		background-color: #0008;
		border-radius: 50%;

		&:hover {
			cursor: pointer;
			transform: scale(1.1);
		}

		.lucide-star:hover {
			stroke: hsl(45, 100%, 65%);
			fill: hsl(45, 100%, 65%);
			transform: scale(1.1);
		}

		.lucide-star:active {
			transform: scale(1.15);
			filter: brightness(120%);
		}
	}
`;

export const AvatarStyle = styled.div`
	width: 120px;
	height: 120px;
	position: absolute;
	transform: translate(0, 50%);
	border-radius: 50%;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	@media screen and (min-width: ${breakPoints.md}) {
		width: 140px;
		height: 140px;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		width: 160px;
		height: 160px;
	}
`;

export const CardContatoInfo = styled.div`
	width: 100%;
	text-align: center;
	position: relative;
`;

export const BotoesEspeciaisContainer = styled.div`
	position: absolute;
	right: 12px;
	top: 8px;

	.lucide-trash2 {
		stroke: red;
		margin-right: 8px;
		border-radius: 50%;
		transition: all 0.15s ease-out;

		&:hover {
			cursor: pointer;
			transform: scale(1.1);
			background-color: #f002;
			box-shadow: 0 0 15px 5px #f002;
		}

		&:active {
			transform: scale(1.2);
		}
	}

	.lucide-square-pen {
		stroke: blue;
		transition: all 0.15s ease-out;

		&:hover {
			cursor: pointer;
			transform: scale(1.1);
			background-color: #00f2;
			box-shadow: 0 0 15px 5px #00f2;
		}

		&:active {
			transform: scale(1.2);
		}
	}

	@media screen and (min-width: ${breakPoints.md}) {
		.lucide-trash2 {
			font-size: 28px;
		}

		.lucide-square-pen {
			font-size: 28px;
		}
	}
	@media screen and (min-width: ${breakPoints.lg}) {
		.lucide-trash2 {
			font-size: 32px;
			size: 32px;
		}

		.lucide-square-pen {
			font-size: 32px;
		}
	}
`;

export const TituloNomeCard = styled(Titulo)`
	margin-top: 64px;
	font-size: 34px;
	width: 100%;

	@media screen and (min-width: ${breakPoints.sm}) {
		font-size: 38px;
		margin-top: 72px;
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		font-size: 42px;
		margin-top: 82px;
	}
`;

export const InfoContainerStyle = styled.div`
	margin: 8px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	.lucide-phone,
	.lucide-mail-plus {
		border-right: 1px solid #0005;
		padding-right: 12px;
		margin-right: 12px;
	}
`;

export const InfoStyle = styled.div`
	width: 80%;
	padding: 8px 0;
	text-align: left;

	h3 {
		font-style: italic;
		margin-bottom: 8px;
		font-size: 16px;
	}

	h2 {
		font-size: 16px;
		word-wrap: break-word;
	}

	@media screen and (min-width: ${breakPoints.sm}) {
		h3 {
			font-size: 18px;
		}

		h2 {
			font-size: 22px;
		}
	}

	@media screen and (min-width: ${breakPoints.lg}) {
		h3 {
			font-size: 22px;
		}

		h2 {
			font-size: 24px;
		}
	}
`;

export const SocialContainerStyle = styled.div`
	width: 100%;
	margin: 12px 0;
	padding-top: 12px;
	border-top: 1px solid #0003;

	h3 {
		margin-left: 12px;
	}
`;

export const SocialListStyle = styled.ul`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
`;

/*
a a a a a a a a a a a a a

a a a a
  a a a a
    a a a a
      a a a a
        a a a a
          a a a a
            a a a a
              a a a a
                a a a a
                  a a a a

(1 - 0)^2 + (3 - 1)^2 + (2 - 3)^2 + (9 - 2)^2
1 + 4 + 1 + 49
55
sqrt(55)
*/
