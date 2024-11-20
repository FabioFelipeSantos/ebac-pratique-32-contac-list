import BarraLateral from "../../containers/BarraLateral/BarraLateral";
import ListaDeContatos from "../../containers/ListaDeContatos/ListaDeContatos";
import { MainPageStyle } from "./styles";

export default function MainPage() {
	return (
		<MainPageStyle>
			<BarraLateral />
			<ListaDeContatos />
		</MainPageStyle>
	);
}
