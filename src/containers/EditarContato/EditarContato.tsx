import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { selectContactById } from "../../store/reducers/contactListSlice";
import {
	BotaoAlterarDadosStyle,
	ColorInputStyle,
	ContainerEditarContato,
	InputStyle,
	LabelStyle,
	SocialsContainer,
	TituloDaEdicao,
} from "./styles";
import { useState } from "react";
import {
	SiFacebook,
	SiFacebookHex,
	SiInstagram,
	SiInstagramHex,
	SiX,
	SiXHex,
} from "@icons-pack/react-simple-icons";

export default function EditarContato() {
	const { contactId } = useParams();
	const contato = useAppSelector((state) => selectContactById(state, contactId!));

	const [nome, setNome] = useState(contato.fullName);
	const [telefone, setTelefone] = useState(contato.phone);
	const [email, setEmail] = useState(contato.email);
	const [avatar, setAvatar] = useState(contato.avatar);
	const [cor, setCor] = useState(contato.color);
	const [socials, setSocials] = useState(contato.socials);

	return (
		<ContainerEditarContato>
			<TituloDaEdicao>Editando seu contato</TituloDaEdicao>

			<form
				action=""
				onSubmit={(event) => event.preventDefault()}>
				<LabelStyle htmlFor="name">Nome do contato*:</LabelStyle>
				<InputStyle
					type="text"
					name="name"
					value={nome}
					required
				/>
				<LabelStyle htmlFor="phone">Telefone*:</LabelStyle>
				<InputStyle
					type="text"
					name="phone"
					value={telefone}
					required
				/>
				<LabelStyle htmlFor="email">E-mail*:</LabelStyle>
				<InputStyle
					type="text"
					name="email"
					value={email}
					required
				/>
				<LabelStyle htmlFor="avatar">Url do seu avatar (opcional):</LabelStyle>
				<InputStyle
					type="text"
					name="avatar"
					value={avatar}
				/>
				<LabelStyle htmlFor="color">Uma cor para o card do contato (opcional):</LabelStyle>
				<ColorInputStyle
					type="color"
					name="color"
					value={cor}
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
							value={socials?.facebook}
						/>
					</div>
					<div>
						<label htmlFor="instagram">
							<SiInstagram color={SiInstagramHex} />
						</label>
						<InputStyle
							type="text"
							name="instagram"
							value={socials?.instagram}
						/>
					</div>
					<div>
						<label htmlFor="twitter">
							<SiX color={SiXHex} />
						</label>
						<InputStyle
							type="text"
							name="twitter"
							value={socials?.X}
						/>
					</div>
				</SocialsContainer>
				<BotaoAlterarDadosStyle type="submit">Alterar dados</BotaoAlterarDadosStyle>
			</form>
		</ContainerEditarContato>
	);
}
