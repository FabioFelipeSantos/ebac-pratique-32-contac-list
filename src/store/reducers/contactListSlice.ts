import { createSlice, createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import createFakePerson from "../../utils/createFakePersons";
import { createAppAsyncThunk } from "../hooks";
import { RootState } from "../store";

export interface Contact {
	id: string;
	fullName: string;
	email: string;
	phone: string;
	date: string;
	socials?: { instagram: string; facebook: string; X: string };
	avatar?: string;
	color?: string;
}

export const fetchContacts = createAppAsyncThunk("contacts/fetchContacts", async () => {
	const response = await createFakePerson(20);
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
	reducers: {},
	selectors: {
		selectStatusOfFetching: (state) => state.status,
	},
	extraReducers: (builder) => {
		builder
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
export const {} = contactListSlice.actions;
export const {
	selectAll: selectAllContacts,
	selectById: selectContactById,
	selectIds: selectContactsIds,
	selectTotal: selectTotalOfContacts,
} = contactAdapter.getSelectors((state: RootState) => state.contactList);
export const { selectStatusOfFetching } = contactListSlice.selectors;
