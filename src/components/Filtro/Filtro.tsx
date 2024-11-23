import { FiltroStyle } from "./styles";

type Props = {
	label: string;
	filtroDigitado: string;
	handleChangingFiltro: (novoFiltro: string) => void;
	fromMain?: boolean;
};

export default function Filtro({ label, filtroDigitado, handleChangingFiltro, fromMain = false }: Props) {
	return (
		<FiltroStyle fromMain={fromMain}>
			<label htmlFor="nome">{label}</label>
			<input
				id="nome"
				type="text"
				name="nome"
				value={filtroDigitado}
				placeholder="Digite o filtro..."
				onChange={(event) => handleChangingFiltro(event.target.value)}
			/>
		</FiltroStyle>
	);
}
