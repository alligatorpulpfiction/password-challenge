var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOptions() { 
  var passwordLength = prompt("Please enter the length of the password that you require (between 8 and 128 characters):");

  if (passwordLength < 8 || passwordLength > 128) {
    showMessage("Password length must be between 8 and 128 characters.");
    return null;
  }

  if (passwordLength === null || passwordLength === "") {
    showMessage("Password must be at least 8 characters.");
    return;
  }

  hideMessage();

  var includeLowercase = true;
  var includeUppercase = true;
  var includeNumeric = true;
  var includeSpecialChars = true;

  return {
    length: passwordLength,
    includeLowercase: includeLowercase,
    includeUppercase: includeUppercase,
    includeNumeric: includeNumeric,
    includeSpecialChars: includeSpecialChars
  };
}

function showMessage(message) {
  var messageElement = document.getElementById('message');
  messageElement.textContent = message;
}

function hideMessage() {
  var messageElement = document.getElementById('message');
  messageElement.textContent = '';
}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function generatePassword() {
  var options = getPasswordOptions();
  if (!options) {
    return "";
  }

  var charPool = "";
    if (options.includeLowercase) charPool += lowerCasedCharacters.join('');
    if (options.includeUppercase) charPool += upperCasedCharacters.join('');
    if (options.includeNumeric) charPool += numericCharacters.join('');
    if (options.includeSpecialChars) charPool += specialCharacters.join('');

  var generatedPassword = "";
    for (var i = 0; i < options.length; i++) {
    generatedPassword += getRandom(charPool);
  }

return generatedPassword;
}

var messageElement = document.getElementById('message');
var generateBtn = document.querySelector('#generate');

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

generateBtn.style.display = 'none';
messageElement.style.display = 'none';
}

generateBtn.addEventListener('click', writePassword);