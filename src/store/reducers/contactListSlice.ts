import { createSlice } from "@reduxjs/toolkit";
import createFakePerson from "../../utils/createFakePersons";

export interface Contact {
	fullName: string;
	email: string;
	phone: string;
	date: Date;
	socials?: { instagram: string; facebook: string; X: string };
	avatar?: string;
	color: string;
}

const initialState: Contact[] = createFakePerson(10);

const contactListSlice = createSlice({
	name: "contactList",
	initialState,
	reducers: {},
	selectors: {
		selectAllPersons: (state) => state,
	},
});

export default contactListSlice.reducer;
export const {} = contactListSlice.actions;
export const { selectAllPersons } = contactListSlice.selectors;
