import { Contact } from "../../store/reducers/contactListSlice";
import { MailPlus, Phone, StarIcon } from "lucide-react";
import Social from "../Social/Social";
import { CardHeader, CardStyle } from "./styles";

export default function ContactCard({ color, avatar, fullName, phone, email, socials }: Contact) {
	return (
		<CardStyle>
			<CardHeader color={color}>
				<span>
					<StarIcon size={32} />
				</span>
			</CardHeader>

			<div>
				<img src={avatar} />
			</div>

			<h2>{fullName}</h2>

			<div>
				<div>
					<Phone />
				</div>
				<div>
					<h3>Número de Telefone</h3>
					<h2>{phone}</h2>
				</div>
			</div>

			<div>
				<div>
					<MailPlus />
				</div>
				<div>
					<h3>E-mail</h3>
					<h2>{email}</h2>
				</div>
			</div>

			{socials && (
				<div>
					<h3>Redes Sociais</h3>
					<ul>
						{Object.entries(socials).map((social) => (
							<li key={social[1]}>
								<Social
									social={social[0]}
									link={social[1]}
								/>
							</li>
						))}
					</ul>
				</div>
			)}
		</CardStyle>
	);
}
