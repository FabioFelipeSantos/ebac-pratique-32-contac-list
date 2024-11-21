import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import {
	SiGitHex,
	SiGithub,
	SiInstagram,
	SiInstagramHex,
	SiLinkedin,
	SiLinkedinHex,
	SiYoutube,
	SiYoutubeHex,
} from "@icons-pack/react-simple-icons";

import MainPage from "./pages/MainPage/MainPage.tsx";
import { GlobalStyle } from "./styles/globalStyle.ts";
import { DataContainerStyle, FooterDireitosStyle, FooterStyle } from "./styles.ts";

const date = new Date();

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<GlobalStyle />

			<MainPage />

			<FooterStyle>
				<DataContainerStyle>
					<span>&copy; </span>
					<time dateTime={date.toISOString().slice(0, 10)}>{date.getFullYear()} </time>
					<span>Todos os direitos reservados.</span>
				</DataContainerStyle>

				<FooterDireitosStyle>
					<p>
						Arte e código por <em>Fábio Santos</em>
					</p>

					<div>
						<a href="">
							<SiGithub color={SiGitHex} />
						</a>
						<a href="">
							<SiLinkedin color={SiLinkedinHex} />
						</a>
						<a href="">
							<SiInstagram color={SiInstagramHex} />
						</a>
						<a href="">
							<SiYoutube color={SiYoutubeHex} />
						</a>
					</div>
				</FooterDireitosStyle>
			</FooterStyle>
		</Provider>
	</StrictMode>
);
