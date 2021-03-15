const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const specials = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "()",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  '"',
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Create a variable to store our generated password
  var password = "";

  // Logic would go here
  // Length Validation Prompt: no less than 8, no more than 128. Alert if not true.
  const passwordLength = prompt(
    "How long would you like your password to be? Please insert a number between 8-128."
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("True");
  } else {
    alert("Number Invalid. Please insert a number between 8-128.");
    console.log("False");
    return;
  }

  // Confirm if Lowercase wanted
  const confirmLower = confirm(
    "Do you want to use any lowercase characters? Press 'OK' for yes, 'Cancel' for no."
  );
  if (confirmLower == true) {
    console.log("True");
  } else {
    console.log("False");
  }
  // Confirm if Uppercase wanted
  const confirmUpper = confirm(
    "Do you want to use any uppercase characters? Press 'OK' for yes, 'Cancel' for no."
  );
  if (confirmUpper == true) {
    console.log("True");
  } else {
    console.log("False");
  }
  // Confirm if Numbers wanted
  const confirmNumber = confirm(
    "Do you want to use any numbers? Press 'OK' for yes, 'Cancel' for no."
  );
  if (confirmNumber == true) {
    console.log("True");
  } else {
    console.log("False");
  }
  // Confirm if special characters wanted
  const confirmSpecial = confirm(
    "Do you want to use any special characters? Press 'OK' for yes, 'Cancel' for no."
  );
  if (confirmSpecial == true) {
    console.log("True");
  } else {
    console.log("False");
  }
  // Alert if all false.

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
