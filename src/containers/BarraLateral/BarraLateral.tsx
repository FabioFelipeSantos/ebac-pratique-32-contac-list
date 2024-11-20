import Filtro from "../../components/Filtro/Filtro";
import { BarraLateralStyle, ItemSeletor } from "./styles";

const seletores = [
	"Todos",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

export default function BarraLateral() {
	return (
		<BarraLateralStyle>
			<Filtro label="Filtre pelo nome:" />
			<ul>
				{seletores.map((seletor) => (
					<ItemSeletor key={seletor}>
						<button type="button">{seletor}</button>
						<p>Total: </p>
					</ItemSeletor>
				))}
			</ul>
		</BarraLateralStyle>
	);
}
