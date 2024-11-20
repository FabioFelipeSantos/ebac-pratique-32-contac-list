import {
	SiFacebook,
	SiFacebookHex,
	SiInstagram,
	SiInstagramHex,
	SiX,
	SiXHex,
} from "@icons-pack/react-simple-icons";

export default function Social({ social, link }: { social: string; link: string }) {
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
