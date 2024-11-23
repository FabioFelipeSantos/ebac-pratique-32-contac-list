import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { adicionarContato, Contact } from "../../store/reducers/contactListSlice";
import { ContainerAdicionarContato, TituloDaAdicao } from "./styles";
import Form from "../../components/Form/Form";

const contatoVazio = {
	fullName: "",
	phone: "",
	email: "",
	avatar: "",
	color: "",
	socials: {
		facebook: "",
		instagram: "",
		X: "",
	},
};

export default function AdicionarContato() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	function handlingPostNewContact(novoContato: Omit<Contact, "id" | "date">) {
		dispatch(adicionarContato(novoContato));
		navigate("/");
	}

	return (
		<ContainerAdicionarContato>
			<TituloDaAdicao>Adicionando um Novo Contato</TituloDaAdicao>
			<Form
				contato={contatoVazio}
				handlingSubmit={handlingPostNewContact}
			/>
		</ContainerAdicionarContato>
	);
}
