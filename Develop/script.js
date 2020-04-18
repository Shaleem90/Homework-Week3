// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

//function myFunction(){
  //var userChoice = prompt ("How many characters would you like to have in your password? Min 8 Max 128.");
  //var userChoice = prompt ("Would you like to have a lowercase in your password? Please type Yes or No.");
  //var userChoice = prompt ("Would you like to have an uppercase in your password? Please type Yes or No.");
  //var userChoice = prompt ("Would you like to have a number in your password? Please type Yes or No.");
  //var userChoice = prompt ("Would you like to have a special character in your password? Please type Yes or No.");
  //alert("Password Generated")
//}


//```
//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN prompted for character types to include in the password
//THEN I choose lowercase, uppercase, numeric, and/or special characters


//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page
//```

var characterAmountRange = document.getElementById('lengthRange')
var characterAmountNumber = document.getElementById('lengthNumber')
var form = document.getElementById('passwordGenerator')
var includeUppercase = getElementById('includeUppercase')
var includeLowercase = getElementById('includeLowercase')
var includeNumbers = getElementById('includeNumbers')
var includeincludeSpecialCharacters = getElementById('includeSpecialCharacters')
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOLS_CHAR_CODES = arrayFromLowToHigh(38, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))

characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  var characterAmountNum = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeLowercase = includeLowercaseElement.checked 
  var includeNumbers = includeNumbersElement.checked 
  var includeSpecialCharacters = includeSpecialCharactersElement.checked  

  var password = passwordGenerator(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
})

function passwordGenerator(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols){
  console.log(LOWERCASE_CHAR_CODES)
}

function arrayFromLowToHigh(low, high){
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {

  var value = e.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}




