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
	const response = await createFakePerson(10);
	return response;
});

export interface ContactListState extends EntityState<Contact, string> {
	status: "idle" | "pending" | "succeeded";
}

const contactAdapter = createEntityAdapter<Contact>({
	sortComparer: (a, b) => a.fullName.localeCompare(b.fullName),
});

const initialState: ContactListState = contactAdapter.getInitialState({
	status: "idle",
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
		},
		editarContato: (state, action: PayloadAction<Omit<Contact, "date">>) => {
			const { id, fullName, phone, email, avatar, color, socials } = action.payload;
			contactAdapter.updateOne(state, {
				id,
				changes: { fullName, phone, email, avatar, color, socials },
			});
		},
		removerContato: (state, action: PayloadAction<string>) => {
			contactAdapter.removeOne(state, action.payload);
		},
	},
	selectors: {
		selectStatusOfFetching: (state) => state.status,
	},
	extraReducers: (builder) => {
		builder
			.addCase(adicionarContato)
			.addCase(fetchContacts.pending, (state, _) => {
				state.status = "pending";
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.status = "succeeded";
				contactAdapter.setAll(state, action.payload);
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
export const { selectStatusOfFetching } = contactListSlice.selectors;
