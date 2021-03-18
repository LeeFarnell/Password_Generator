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
  "(",
  ")",
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

// Declare a new function on line 3
function generatePassword() {
  // Create a variable to store our generated password
  let password = "";
  const combinedArray = [];
  const result = [];

  // Logic would go here
  // Length Validation Prompt.
  const passwordLength = prompt(
    "How long would you like your password to be? Please insert a number between 8-128."
  );
  // Converting string to number and store in new variable.
  const passwordParsed = Number.parseInt(passwordLength);
  // If block containing Confirms
  if (passwordParsed >= 8 && passwordParsed <= 128) {
    // Confirm if Lowercase wanted
    const confirmLower = confirm(
      "Do you want to use any lowercase characters? Press 'OK' for yes, 'Cancel' for no."
    );
    // Confirm if Uppercase wanted
    const confirmUpper = confirm(
      "Do you want to use any uppercase characters? Press 'OK' for yes, 'Cancel' for no."
    );
    // Confirm if Numbers wanted
    const confirmNumber = confirm(
      "Do you want to use any numbers? Press 'OK' for yes, 'Cancel' for no."
    );

    // Confirm if special characters wanted
    const confirmSpecial = confirm(
      "Do you want to use any special characters? Press 'OK' for yes, 'Cancel' for no."
    );

    // Push options to combined array.
    if (confirmLower) {
      combinedArray.push(...lowercase);
    }
    if (confirmUpper) {
      combinedArray.push(...uppercase);
    }
    if (confirmNumber) {
      combinedArray.push(...numbers);
    }
    if (confirmSpecial) {
      combinedArray.push(...specials);
    }

    if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
      alert("You must select at least one of the character types.");
      console.log("Try again");
    }
  } else {
    alert("Number Invalid. Please insert a number between 8-128.");
    console.log("False");
    return;
  }

  // Get that array from combinedArray
  function randomGenerator() {
    const randomIndex = Math.floor(Math.random() * combinedArray.length);
    const randomChoice = combinedArray[randomIndex];
    return randomChoice;
  }

  // Loop function
  for (let i = 0; i < passwordParsed; i++) {
    let randomResult = randomGenerator();
    result.push(randomResult);
  }
  //  Put result into a new array
  password = result.join("");

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
