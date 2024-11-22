import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import contactListReducer from "./reducers/contactListSlice";

const store = configureStore({
	reducer: {
		contactList: contactListReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
