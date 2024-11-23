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
	SiX,
	SiXHex,
	SiYoutube,
	SiYoutubeHex,
} from "@icons-pack/react-simple-icons";

import MainPage from "./pages/MainPage/MainPage.tsx";
import { GlobalStyle } from "./styles/globalStyle.ts";
import {
	DataContainerStyle,
	FooterDireitosStyle,
	FooterStyle,
	SocialFooterContainerStyle,
} from "./styles.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditarContato from "./containers/EditarContato/EditarContato.tsx";
import AdicionarContato from "./containers/AdicionarContato/AdicionarContato.tsx";

const date = new Date();

const rotas = createBrowserRouter([
	{
		path: "/",
		element: <MainPage />,
	},
	{
		path: "/adicionar",
		element: <AdicionarContato />,
	},
	{
		path: "/editar/:contactId",
		element: <EditarContato />,
	},
]);

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<GlobalStyle />

			<RouterProvider router={rotas} />

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

					<SocialFooterContainerStyle>
						<a
							href="https://github.com/FabioFelipeSantos"
							target="_blank">
							<SiGithub color={SiGitHex} />
						</a>
						<a
							href="https://www.linkedin.com/in/f%C3%A1bio-santos-a417a0127?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2Fna0QRViQb6UpOWDuErL%2Bw%3D%3D"
							target="_blank">
							<SiLinkedin color={SiLinkedinHex} />
						</a>
						<a
							href="https://www.instagram.com/fabio__fsantos/"
							target="_blank">
							<SiInstagram color={SiInstagramHex} />
						</a>
						<a
							href="https://www.youtube.com/@derivadadekonoha"
							target="_blank">
							<SiYoutube color={SiYoutubeHex} />
						</a>
						<a
							href="https://x.com/Fabio_f_Santos"
							target="_blank">
							<SiX color={SiXHex} />
						</a>
					</SocialFooterContainerStyle>
				</FooterDireitosStyle>
			</FooterStyle>
		</Provider>
	</StrictMode>
);
