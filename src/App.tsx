import { selectAllPersons } from "./store/reducers/contactListSlice";
import { useAppSelector } from "./store/store";

import { variables } from "./utils/variables";

import type { Contact } from "./store/reducers/contactListSlice";
import { MailPlus, Phone } from "lucide-react";
import {
	SiFacebook,
	SiFacebookHex,
	SiInstagram,
	SiInstagramHex,
	SiX,
	SiXHex,
} from "@icons-pack/react-simple-icons";

function App() {
	const contactList: Contact[] = useAppSelector(selectAllPersons);

	function socialLink({ social, link }: { social: string; link: string }) {
		if (social === "facebook") {
			return (
				<div>
					<SiFacebook color={SiFacebookHex} />
					<h4>{link}</h4>
				</div>
			);
		} else if (social === "instagram") {
			return (
				<div>
					<SiInstagram color={SiInstagramHex} />
					<h4>{link}</h4>
				</div>
			);
		} else {
			return (
				<div>
					<SiX color={SiXHex} />
					<h4>{link}</h4>
				</div>
			);
		}
	}
	return (
		<>
			<h1>Hi!</h1>
			{contactList.map((person) => (
				<div>
					<div
						style={{
							backgroundColor: person.color,
							width: `${variables.imageSize}px`,
							height: "35px",
						}}>
						<div>⭐</div>
					</div>
					<div>
						<img src={person.avatar} />
					</div>
					<h2>{person.fullName}</h2>
					<div>
						<div>
							<Phone />
						</div>
						<div>
							<h3>Número de Telefone</h3>
							<h2>{person.phone}</h2>
						</div>
					</div>
					<div>
						<div>
							<MailPlus />
						</div>
						<div>
							<h3>E-mail</h3>
							<h2>{person.email}</h2>
						</div>
					</div>
					{person.socials && (
						<div>
							<h3>Redes Sociais</h3>
							<ul>
								{Object.entries(person.socials).map((social) => (
									<li key={social[1]}>
										{socialLink({ social: social[0], link: social[1] })}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			))}
		</>
	);
}

export default App;
