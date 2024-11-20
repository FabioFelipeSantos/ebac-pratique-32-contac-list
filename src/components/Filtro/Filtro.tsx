import { FiltroStyle } from "./styles";

type Props = {
	label: string;
	fromMain?: boolean;
};

export default function Filtro({ label, fromMain = false }: Props) {
	return (
		<FiltroStyle fromMain={fromMain}>
			<label htmlFor="nome">{label}</label>
			<input
				id="nome"
				type="text"
				name="nome"
				placeholder="Digite o filtro..."
			/>
		</FiltroStyle>
	);
}
