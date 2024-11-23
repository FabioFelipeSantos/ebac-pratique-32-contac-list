import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Contact, editarContato, selectContactById } from "../../store/reducers/contactListSlice";
import { ContainerEditarContato, TituloDaEdicao } from "./styles";
import Form from "../../components/Form/Form";

export default function EditarContato() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { contactId } = useParams();
	const { id, ...contatoSemId } = useAppSelector((state) => selectContactById(state, contactId!));

	function handlingPostEditedContact(novoContato: Omit<Contact, "id" | "date">) {
		const contatoEditado = {
			id,
			...novoContato,
		};

		dispatch(editarContato(contatoEditado));
		navigate("/");
	}

	return (
		<ContainerEditarContato>
			<TituloDaEdicao>Editando seu contato</TituloDaEdicao>
			<Form
				contato={contatoSemId}
				handlingSubmit={handlingPostEditedContact}
			/>
		</ContainerEditarContato>
	);
}
