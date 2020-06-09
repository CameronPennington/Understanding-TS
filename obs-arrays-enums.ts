// const person: {
// 	name: string;
// 	age: number;
// 	hobbies: string[];
// 	role: [number, string];
// } = {
// 	name: "Cameron",
// 	age: 33,
// 	hobbies: ["Sports", "Cooking"],
// 	role: [2, "author"],
// };

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
// 	console.log(hobby.toUpperCase());
// }

enum Role {
	ADMIN,
	READ_ONLY,
	AUTHOR,
}

const person = {
	name: "Cameron",
	age: 33,
	hobbies: ["Sports", "Cooking"],
	role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
	console.log(hobby.toUpperCase());
}
