let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

//throws error because userInput is not guaranteed to be a string
// userName = userInput

if (typeof userInput === "string") {
	userName = userInput;
}

//function will never return anything
function generateError(message: string, code: number): never {
	throw { message, errorCode: code };
}

generateError("an error occurred", 500);
