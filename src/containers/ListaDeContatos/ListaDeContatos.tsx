import {
	Contact,
	fetchContacts,
	selectAllContacts,
	selectStatusOfFetching,
} from "../../store/reducers/contactListSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
	BotaoAdicionarContatoStyle,
	ListaDeContatosStyle,
	SpinStyle,
	TituloContatosContainer,
} from "./styles";
import Filtro from "../../components/Filtro/Filtro";
import ContactCard from "../../components/ContactCard/ContactCard";
import { Titulo } from "../../styles/globalStyle";
import { useEffect } from "react";

export default function ListaDeContatos() {
	const dispatch = useAppDispatch();
	const contactList: Contact[] = useAppSelector(selectAllContacts);
	const statusDoFetching: string = useAppSelector(selectStatusOfFetching);

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	return (
		<ListaDeContatosStyle>
			<TituloContatosContainer>
				<Titulo as="h1">Lista de Contatos</Titulo>
				<BotaoAdicionarContatoStyle type="button">Adicionar Contato</BotaoAdicionarContatoStyle>
			</TituloContatosContainer>

			<Filtro
				fromMain
				label="Filtre por uma letra ou pelo menos parte do nome:"
			/>

			{statusDoFetching === "pending" ? (
				<>
					<h1>Carregando seus contatos...</h1>
					<SpinStyle></SpinStyle>
				</>
			) : (
				<ul>
					{contactList.map((person) => (
						<ContactCard
							key={person.id}
							id={person.id}
							fullName={person.fullName}
							date={person.date}
							email={person.email}
							phone={person.phone}
							avatar={person.avatar}
							color={person.color}
							socials={person.socials}
						/>
					))}
				</ul>
			)}
		</ListaDeContatosStyle>
	);
}
