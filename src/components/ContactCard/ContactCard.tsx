import { Contact } from "../../store/reducers/contactListSlice";
import { MailPlus, PenBox, Phone, StarIcon, Trash2 } from "lucide-react";
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

export default function ContactCard({ id, color, avatar, fullName, phone, email, socials }: Contact) {
	return (
		<CardStyle>
			<CardHeader color={color}>
				<span>
					<StarIcon
						size={32}
						color="hsl(45, 100%, 50%)"
						fill="hsl(45, 100%, 50%)"
					/>
				</span>
			</CardHeader>

			<AvatarStyle>
				<img src={avatar} />
			</AvatarStyle>

			<CardContatoInfo>
				<BotoesEspeciaisContainer>
					<Trash2 size={22} />
					<Link to={`/editar/${id}`}>
						<PenBox size={22} />
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

			{socials && (
				<SocialContainerStyle>
					<h3>Redes Sociais</h3>
					<SocialListStyle>
						{Object.entries(socials).map((social) => (
							<li key={social[1]}>
								<Social
									social={social[0]}
									link={social[1]}
								/>
							</li>
						))}
					</SocialListStyle>
				</SocialContainerStyle>
			)}
		</CardStyle>
	);
}
