// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
	// Create a variable to store our generated password
	var password = ''

	// Logic would go here
	...

	// Return our created password
	return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TO DO
// Create Arrays for LowerCase, UpperCase, Numbers & Special Characters
// Length Validation Prompt: no less than 8, no more than 128. Alert if not true.
// Confirm if Lowercase wanted
// Confirm if Uppercase wanted
// Confirm if Numbers wanted
// Confirm if special characters wanted
// Alert if all false.
