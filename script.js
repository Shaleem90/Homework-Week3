var characterAmountRange = document.getElementById('lengthRange')
var characterAmountNumber = document.getElementById('lengthNumber')
var form = document.getElementById('passwordGenerator')
var passwordDisplay = document.getElementById('passwordDisplay')
var includeUppercaseElement = document.getElementById('includeUppercase')
var includeLowercaseElement = document.getElementById('includeLowercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSpecialCharactersElement = document.getElementById('includeSpecialCharacters')
var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOLS_CHAR_CODES = arrayFromLowToHigh(38, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126))


characterAmountRange.addEventListener('input', syncCharacterAmount)
characterAmountNumber.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  var characterAmount  = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeLowercase = includeLowercaseElement.checked 
  var includeNumbers = includeNumbersElement.checked 
  var includeSpecialCharacters = includeSpecialCharactersElement.checked  

  var password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters)
  passwordDisplay.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSpecialCharacters){
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSpecialCharacters) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES)
  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * characterAmount)]
    passwordCharacters.push(String.fromCharCode(characterCode))

  }
  return passwordCharacters.join('')
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
  characterAmountNumber.value = value
  characterAmountRange.value = value
}




