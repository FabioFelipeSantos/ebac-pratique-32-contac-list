import { FiltroStyle } from "./styles";

type Props = {
	label: string;
	filtroDigitado: string;
	handleChangingFiltro: (novoFiltro: string) => void;
};

export default function Filtro({ label, filtroDigitado, handleChangingFiltro }: Props) {
	return (
		<FiltroStyle>
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
