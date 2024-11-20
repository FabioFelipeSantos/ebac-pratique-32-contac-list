import { Contact, selectAllPersons } from "../../store/reducers/contactListSlice";
import { useAppSelector } from "../../store/store";
import { ListaDeContatosStyle, TituloContatos } from "./styles";
import Filtro from "../../components/Filtro/Filtro";
import ContactCard from "../../components/ContactCard/ContactCard";

export default function ListaDeContatos() {
	const contactList: Contact[] = useAppSelector(selectAllPersons);

	return (
		<ListaDeContatosStyle>
			<TituloContatos>Lista de Contatos</TituloContatos>
			<Filtro
				fromMain
				label="Filtre por uma letra ou pelo menos parte do nome:"
			/>
			{contactList.map((person) => (
				<ContactCard
					key={person.fullName}
					fullName={person.fullName}
					date={person.date}
					email={person.email}
					phone={person.phone}
					avatar={person.avatar}
					color={person.color}
					socials={person.socials}
				/>
			))}
		</ListaDeContatosStyle>
	);
}
