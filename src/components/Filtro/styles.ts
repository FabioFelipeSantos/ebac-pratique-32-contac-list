import styled from "styled-components";

export const FiltroStyle = styled.div`
	width: 100%;
	min-width: 350px;
	max-width: 700px;
	margin-bottom: 24px;
	padding: 18px 12px;
	font-size: 18px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	background-color: #0003;
	position: sticky;
	top: 0px;
	z-index: 2;

	label {
		margin-bottom: 8px;
	}
	input {
		width: 100%;
		padding: 6px 8px;
		font-size: 16px;
		border-radius: 8px;
		border: 1px solid #0005;
	}
`;
