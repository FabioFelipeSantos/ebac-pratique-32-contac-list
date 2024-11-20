import { fakerPT_BR } from "@faker-js/faker";

export default function phoneNumberStartingWith9() {
	let phoneNumber: string = fakerPT_BR.phone.number({ style: "national" });
	let k = 0;

	while (phoneNumber.slice(5, 6) !== "9" && k < 1e3) {
		phoneNumber = fakerPT_BR.phone.number({ style: "national" });
		k++;
	}

	return phoneNumber;
}
