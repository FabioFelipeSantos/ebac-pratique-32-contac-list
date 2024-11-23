import { useEffect, useState } from "react";
import ListaDeContatos from "../../containers/ListaDeContatos/ListaDeContatos";
import {
	BotaoAdicionarContatoStyle,
	FiltroESeletorContainer,
	MainPageStyle,
	SpinStyle,
	TituloContatosContainer,
} from "./styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
	Contact,
	fetchContacts,
	selectAllContacts,
	selectStatusOfFetching,
} from "../../store/reducers/contactListSlice";
import { Titulo } from "../../styles/globalStyle";
import Filtro from "../../components/Filtro/Filtro";
import { useNavigate } from "react-router-dom";

let seletores: string[] = [];

export default function MainPage() {
	const navigate = useNavigate();

	const [filtro, setFiltro] = useState("todos");
	const [filtroDigitado, setFiltroDigitado] = useState("");
	const [seletores, setSeletores] = useState<string[]>([]);

	const dispatch = useAppDispatch();
	const contactList: Contact[] = useAppSelector(selectAllContacts);
	const statusDoFetching: string = useAppSelector(selectStatusOfFetching);

	let listaFiltrada;
	if (filtro === "todos") {
		listaFiltrada = contactList;
	} else {
		listaFiltrada = contactList.filter((contato) => contato.fullName[0].toLowerCase() === filtro);
	}

	if (filtroDigitado !== "") {
		listaFiltrada = listaFiltrada.filter(
			(contato) => contato.fullName.toLowerCase().search(filtroDigitado.toLowerCase()) >= 0
		);
	}

	useEffect(() => {
		if (statusDoFetching === "idle") {
			dispatch(fetchContacts());
		}
	}, [statusDoFetching, dispatch]);

	return (
		<MainPageStyle>
			<TituloContatosContainer>
				<Titulo as="h1">Lista de Contatos</Titulo>
				<BotaoAdicionarContatoStyle
					type="button"
					onClick={() => navigate("/adicionar")}>
					Adicionar Contato
				</BotaoAdicionarContatoStyle>
			</TituloContatosContainer>

			<FiltroESeletorContainer>
				<Filtro
					label="Filtre por uma letra ou pelo menos parte do nome:"
					filtroDigitado={filtroDigitado}
					handleChangingFiltro={setFiltroDigitado}
				/>

				<select
					name=""
					id=""
					onChange={(event) => setFiltro(event.target.value)}>
					<option
						value="todos"
						selected>
						Escolha um filtro
					</option>
					{seletores.map((seletor) => (
						<option value={seletor.toLowerCase()}>{seletor}</option>
					))}
				</select>
			</FiltroESeletorContainer>

			{statusDoFetching === "pending" ? (
				<>
					<h1>Carregando seus contatos...</h1>
					<SpinStyle></SpinStyle>
				</>
			) : (
				<ListaDeContatos listaDeContatos={listaFiltrada} />
			)}
		</MainPageStyle>
	);
}
