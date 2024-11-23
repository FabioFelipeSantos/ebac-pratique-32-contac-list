import { useState } from "react";
import {
	SiFacebook,
	SiFacebookHex,
	SiInstagram,
	SiInstagramHex,
	SiX,
	SiXHex,
} from "@icons-pack/react-simple-icons";
import { BotaoAlterarDadosStyle, ColorInputStyle, InputStyle, LabelStyle, SocialsContainer } from "./styles";

interface EditarContatoFormFields extends HTMLFormControlsCollection {
	nome: HTMLInputElement;
	telefone: HTMLInputElement;
	email: HTMLInputElement;
	avatar: HTMLInputElement;
	cor: HTMLInputElement;
	facebook: HTMLInputElement;
	instagram: HTMLInputElement;
	X: HTMLInputElement;
}

interface EditarContatoElementos extends HTMLFormElement {
	readonly elements: EditarContatoFormFields;
}

type NovoContato = {
	fullName: string;
	phone: string;
	email: string;
	avatar: string;
	color: string;
	socials: {
		facebook: string;
		instagram: string;
		X: string;
	};
};

type Props = {
	contato: NovoContato;
	handlingSubmit: (novoContato: NovoContato) => void;
};
export default function Form({ contato, handlingSubmit }: Props) {
	const [nome, setNome] = useState(contato.fullName);
	const [telefone, setTelefone] = useState(contato.phone);
	const [email, setEmail] = useState(contato.email);
	const [avatar, setAvatar] = useState(contato.avatar);
	const [cor, setCor] = useState(contato.color);
	const [socials, setSocials] = useState(contato.socials);

	const handleFormSubmit = (event: React.FormEvent<EditarContatoElementos>) => {
		event.preventDefault();
		const { elements } = event.currentTarget;
		const nome = elements.nome.value;
		const telefone = elements.telefone.value;
		const email = elements.email.value;
		const avatar = elements.avatar.value;
		const cor = elements.cor.value;
		const facebook = elements.facebook.value;
		const instagram = elements.instagram.value;
		const X = elements.X.value;

		const novoContato = {
			fullName: nome,
			phone: telefone,
			email,
			avatar,
			color: cor,
			socials: {
				facebook,
				instagram,
				X,
			},
		};

		handlingSubmit(novoContato);
	};

	return (
		<form onSubmit={handleFormSubmit}>
			<LabelStyle htmlFor="nome">Nome do contato*:</LabelStyle>
			<InputStyle
				type="text"
				name="nome"
				value={nome}
				required
				onChange={(event) => setNome(event.target.value)}
			/>
			<LabelStyle htmlFor="telefone">Telefone*:</LabelStyle>
			<InputStyle
				type="text"
				name="telefone"
				value={telefone}
				required
				onChange={(event) => setTelefone(event.target.value)}
			/>
			<LabelStyle htmlFor="email">E-mail*:</LabelStyle>
			<InputStyle
				type="text"
				name="email"
				value={email}
				required
				onChange={(event) => setEmail(event.target.value)}
			/>
			<LabelStyle htmlFor="avatar">Url do seu avatar (opcional):</LabelStyle>
			<InputStyle
				type="text"
				name="avatar"
				value={avatar}
				onChange={(event) => setAvatar(event.target.value)}
			/>
			<LabelStyle htmlFor="cor">Uma cor para o card do contato (opcional):</LabelStyle>
			<ColorInputStyle
				type="color"
				name="cor"
				value={cor}
				onChange={(event) => setCor(event.target.value)}
			/>
			<LabelStyle htmlFor="">Redes Sociais (opcional)</LabelStyle>
			<SocialsContainer>
				<div>
					<label htmlFor="facebook">
						<SiFacebook color={SiFacebookHex} />
					</label>
					<InputStyle
						type="text"
						name="facebook"
						value={socials.facebook}
						onChange={(event) =>
							setSocials({
								...socials,
								facebook: event.target.value,
							})
						}
					/>
				</div>
				<div>
					<label htmlFor="instagram">
						<SiInstagram color={SiInstagramHex} />
					</label>
					<InputStyle
						type="text"
						name="instagram"
						value={socials.instagram}
						onChange={(event) =>
							setSocials({
								...socials,
								instagram: event.target.value,
							})
						}
					/>
				</div>
				<div>
					<label htmlFor="X">
						<SiX color={SiXHex} />
					</label>
					<InputStyle
						type="text"
						name="X"
						value={socials.X}
						onChange={(event) =>
							setSocials({
								...socials,
								X: event.target.value,
							})
						}
					/>
				</div>
			</SocialsContainer>
			<BotaoAlterarDadosStyle>Alterar dados</BotaoAlterarDadosStyle>
		</form>
	);
}
