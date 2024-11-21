import {
	SiFacebook,
	SiFacebookHex,
	SiInstagram,
	SiInstagramHex,
	SiX,
	SiXHex,
} from "@icons-pack/react-simple-icons";
import { SocialItemContainer } from "./style";

export default function Social({ social, link }: { social: string; link: string }) {
	if (social === "facebook") {
		return (
			<SocialItemContainer>
				<SiFacebook color={SiFacebookHex} />
				<h4>{link}</h4>
			</SocialItemContainer>
		);
	} else if (social === "instagram") {
		return (
			<SocialItemContainer>
				<SiInstagram color={SiInstagramHex} />
				<h4>{link}</h4>
			</SocialItemContainer>
		);
	} else {
		return (
			<SocialItemContainer>
				<SiX color={SiXHex} />
				<h4>{link}</h4>
			</SocialItemContainer>
		);
	}
}
