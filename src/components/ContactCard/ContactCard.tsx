import { Contact, removerContato } from "../../store/reducers/contactListSlice";
import { MailPlus, PenBox, Phone, Trash2 } from "lucide-react";
import Social from "../Social/Social";
import {
	AvatarStyle,
	CardContatoInfo,
	CardHeader,
	CardStyle,
	InfoStyle,
	TituloNomeCard,
	InfoContainerStyle,
	SocialContainerStyle,
	SocialListStyle,
	BotoesEspeciaisContainer,
} from "./styles";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";

export default function ContactCard({ id, color, avatar, fullName, phone, email, socials }: Contact) {
	const dispatch = useAppDispatch();

	function haveAnySocial() {
		const socialsPassed = [];

		for (const [key, value] of Object.entries(socials)) {
			if (value !== "") {
				socialsPassed.push({ key, value });
			}
		}

		return socialsPassed;
	}

	return (
		<CardStyle>
			<CardHeader color={color}></CardHeader>

			<AvatarStyle>
				<img src={avatar} />
			</AvatarStyle>

			<CardContatoInfo>
				<BotoesEspeciaisContainer>
					<Trash2
						size={28}
						onClick={() => dispatch(removerContato(id))}
					/>
					<Link to={`/editar/${id}`}>
						<PenBox size={28} />
					</Link>
				</BotoesEspeciaisContainer>

				<TituloNomeCard>{fullName}</TituloNomeCard>

				<InfoContainerStyle>
					<Phone size={44} />

					<InfoStyle>
						<h3>Número de Telefone</h3>
						<h2>{phone}</h2>
					</InfoStyle>
				</InfoContainerStyle>

				<InfoContainerStyle>
					<MailPlus size={44} />
					<InfoStyle>
						<h3>E-mail</h3>
						<h2>{email}</h2>
					</InfoStyle>
				</InfoContainerStyle>
			</CardContatoInfo>

			{haveAnySocial().length > 0 && (
				<SocialContainerStyle>
					<h3>Redes Sociais</h3>
					<SocialListStyle>
						{haveAnySocial().map((social) => (
							<li key={social.key}>
								<Social
									social={social.key}
									link={social.value}
								/>
							</li>
						))}
					</SocialListStyle>
				</SocialContainerStyle>
			)}
		</CardStyle>
	);
}
