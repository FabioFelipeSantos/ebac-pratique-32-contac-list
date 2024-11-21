import BarraLateral from "../../containers/BarraLateral/BarraLateral";
import ListaDeContatos from "../../containers/ListaDeContatos/ListaDeContatos";
import { ListaDeContatosContainerStyle, MainPageStyle } from "./styles";

export default function MainPage() {
	return (
		<MainPageStyle>
			<BarraLateral />

			<ListaDeContatosContainerStyle>
				<ListaDeContatos />
			</ListaDeContatosContainerStyle>
		</MainPageStyle>
	);
}
