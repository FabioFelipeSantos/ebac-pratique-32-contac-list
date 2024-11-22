import { faker, fakerPT_BR } from "@faker-js/faker";
import type { Contact } from "../store/reducers/contactListSlice";
import { variables } from "./variables";
import phoneNumberStartingWith9 from "./phoneNumberStartingWith9";

export default function createFakePerson(numberOfPersons: number): Promise<Contact[]> {
	return new Promise((resolve) => {
		const contactList: Contact[] = [];

		for (let i = 0; i < numberOfPersons; i++) {
			const firstName = fakerPT_BR.person.firstName();
			const lastName = fakerPT_BR.person.lastName();

			contactList.push({
				id: faker.string.uuid(),
				date: fakerPT_BR.date.recent({ days: 60 }).toISOString(),
				fullName: [firstName, lastName].join(" "),
				email: fakerPT_BR.internet
					.email({ firstName, lastName, provider: getProvider() })
					.toLowerCase(),
				phone: phoneNumberStartingWith9(),
				avatar: faker.image.url({ width: variables.imageSize, height: variables.imageSize }),
				color: faker.color.rgb(),
				socials: {
					facebook: `@${firstName.split(" ").join("")}_${lastName}`,
					instagram: `@${lastName}_${firstName.split(" ").join("")}`,
					X: `@${firstName.split(" ").join("")}_${lastName[0]}`,
				},
			});
		}

		setTimeout(() => {
			resolve(contactList);
		}, 1800);
	});
}

function getProvider() {
	const providers = [
		"gmail.com",
		"outlook.com",
		"yahoo.com.br",
		"uol.com.br",
		"microsoft.com",
		"react.com",
		"ebac.com.br",
		"css.com",
		"html.com",
		"javascript.com",
		"java.com",
		"python.com",
	];

	const chosenOne = Math.floor(Math.random() * providers.length);

	return providers[chosenOne];
}
