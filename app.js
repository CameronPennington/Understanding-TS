var userInput;
var userName;
userInput = 5;
userInput = "Max";
//throws error because userInput is not guaranteed to be a string
// userName = userInput
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("an error occurred", 500);
