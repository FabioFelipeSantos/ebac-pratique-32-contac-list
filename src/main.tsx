import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.ts";

import MainPage from "./pages/MainPage/MainPage.tsx";
import { GlobalStyle } from "./styles/globalStyle.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<GlobalStyle />
			<MainPage />
		</Provider>
	</StrictMode>
);
