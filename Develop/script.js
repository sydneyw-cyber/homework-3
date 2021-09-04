// Assignment Code
var generateBtn = document.querySelector("#generate");
// array for capital letters
var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

// array for lowercase letters
var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

// array for numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// array for characters
var characters = ['`', '~', '!', "@", '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', '"', ',', '<', '>', '/', '?'
]

//password prompt function
function randomPassword(){
  // variable for length of prompt
  var length = parseInt(
    prompt('What would you like to password legnth to be?')
  )
  // alert for what happens if cancel or non numberical value is selected
  if (isNaN(length) === true) {
    alert('You must provide length as a number.')
    return
  }

  // Condition for password to be at least 8 characters long
  if (length < 8) {
    alert('Password must have 8 or more characters.')
    return;
  }

  //condition for 20 maximum characters
  if (length > 20) {
    alert('Password can have a maximum of 20 characters.')
    return;
  }

  // 


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
