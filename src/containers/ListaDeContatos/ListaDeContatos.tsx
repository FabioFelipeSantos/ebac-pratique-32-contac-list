import { InformacaoListaApresentada, ListaDeContatosStyle } from "./styles";
import ContactCard from "../../components/ContactCard/ContactCard";
import { Contact } from "../../store/reducers/contactListSlice";

type Props = {
	listaDeContatos: Contact[];
};

export default function ListaDeContatos({ listaDeContatos }: Props) {
	return (
		<ListaDeContatosStyle>
			<InformacaoListaApresentada>
				Total de contatos: {listaDeContatos.length}
			</InformacaoListaApresentada>
			{listaDeContatos.map((person) => (
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
		</ListaDeContatosStyle>
	);
}
