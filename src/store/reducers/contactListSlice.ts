import { createSlice, createEntityAdapter, EntityState, PayloadAction } from "@reduxjs/toolkit";
import {} from "react-redux";
import createFakePerson from "../../utils/createFakePersons";
import { createAppAsyncThunk } from "../hooks";
import { RootState } from "../store";
import { faker } from "@faker-js/faker";

export interface Contact {
	id: string;
	fullName: string;
	email: string;
	phone: string;
	date: string;
	socials: { instagram: string; facebook: string; X: string };
	avatar: string;
	color: string;
}

export const fetchContacts = createAppAsyncThunk("contacts/fetchContacts", async () => {
	const response = await createFakePerson(26);
	return response;
});

export interface ContactListState extends EntityState<Contact, string> {
	status: "idle" | "pending" | "succeeded";
	seletoresDisponiveis: string[];
}

const contactAdapter = createEntityAdapter<Contact>({
	sortComparer: (a, b) => a.fullName.localeCompare(b.fullName),
});

const initialState: ContactListState = contactAdapter.getInitialState({
	status: "idle",
	seletoresDisponiveis: [],
});

const contactListSlice = createSlice({
	name: "contactList",
	initialState,
	reducers: {
		adicionarContato: (state, action: PayloadAction<Omit<Contact, "date" | "id">>) => {
			const id = faker.string.uuid();
			const date = new Date().toISOString();

			const newContact = {
				id,
				date,
				...action.payload,
			};

			contactAdapter.addOne(state, newContact);

			state.seletoresDisponiveis = handleFindingAvailableSelectors({
				fullName: newContact.fullName,
				todosSeletores: state.seletoresDisponiveis,
			});
		},
		editarContato: (state, action: PayloadAction<Omit<Contact, "date">>) => {
			const { id, fullName, phone, email, avatar, color, socials } = action.payload;

			const contatoEditado = {
				id,
				changes: { fullName, phone, email, avatar, color, socials },
			};

			console.log("Retorno da função", excludingOnlyOneSelector(state, id));
			state.seletoresDisponiveis = excludingOnlyOneSelector(state, id);

			contactAdapter.updateOne(state, contatoEditado);
			state.ids.forEach((id) => console.log(state.entities[id].fullName));

			state.seletoresDisponiveis = handleFindingAvailableSelectors({
				fullName: contatoEditado.changes.fullName,
				todosSeletores: state.seletoresDisponiveis,
			});
		},
		removerContato: (state, action: PayloadAction<string>) => {
			state.seletoresDisponiveis = excludingOnlyOneSelector(state, action.payload);
			contactAdapter.removeOne(state, action.payload);
		},
	},
	selectors: {
		selectStatusOfFetching: (state) => state.status,
		selectSeletoresDisponiveis: (state) => state.seletoresDisponiveis,
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, (state, _) => {
				state.status = "pending";
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.status = "succeeded";
				contactAdapter.setAll(state, action.payload);

				state.seletoresDisponiveis = handleFindingAvailableSelectors(action.payload);
			});
	},
});

export default contactListSlice.reducer;
export const { adicionarContato, editarContato, removerContato } = contactListSlice.actions;
export const {
	selectAll: selectAllContacts,
	selectById: selectContactById,
	selectIds: selectContactsIds,
} = contactAdapter.getSelectors((state: RootState) => state.contactList);
export const { selectStatusOfFetching, selectSeletoresDisponiveis } = contactListSlice.selectors;

function excludingOnlyOneSelector(actualContactState: ContactListState, idModificado: string) {
	const todosContatos = actualContactState.ids.map((id) => actualContactState.entities[id]);
	const letraInicial: string = actualContactState.entities[idModificado].fullName[0].toLowerCase();

	const temMaisDeUmaLetraParaOSeletor =
		todosContatos.filter((contato) => contato.fullName[0].toLowerCase() === letraInicial).length > 1;

	if (!temMaisDeUmaLetraParaOSeletor) {
		return actualContactState.seletoresDisponiveis.filter((seletor) => seletor !== letraInicial);
	} else {
		console.log("Seletores sem filtrar", actualContactState.seletoresDisponiveis);
		return actualContactState.seletoresDisponiveis;
	}
}

function handleFindingAvailableSelectors(
	contacts: { fullName: string; todosSeletores: string[] } | Contact[]
) {
	let letrasIniciais: string[] = [];

	if (Array.isArray(contacts)) {
		contacts.forEach((contato) => letrasIniciais.push(contato.fullName[0].toLowerCase()));
	} else {
		letrasIniciais = contacts.todosSeletores;

		if (!letrasIniciais.includes(contacts.fullName[0].toLowerCase())) {
			letrasIniciais.push(contacts.fullName[0].toLowerCase());
		}
	}

	const [...seletoresUnicos] = new Set(letrasIniciais);

	return seletoresUnicos.sort((a, b) => a.localeCompare(b));
}
