// Assignment Code

//Create variables for character options
const uppercaseCharacters = arrayFromLowToHigh(65, 90)
const lowercaseCharacters = arrayFromLowToHigh(97, 122)
const numericCharacters = arrayFromLowToHigh(48, 57)
const specialCharacters = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)



// Create a function for characters options
function generatePassword() {
  // Create alert to place the number of characters to generate
  var length = parseInt(
    prompt('Please type your desired password length.')
    );
    // Conditional so the length is 8 to 128 characters
    if (isNaN(length) === true) {
      alert('Must be an number');
      return;
    } else if (length < 8){
      alert('password must have at least 8 characters')
      return;
    } else if (length > 129) {
      alert('Password must be at least 128 characters')
      return;
    } 
    
    // Create confirm promt to include Special lowercase, numeric, and special characters
    var hasUppercaseCharacters = confirm('Would you like Uppercase characters in your password?');
    var hasLowercaseCharacters = confirm('Would you like Lowercase characters in your password?');
    var hasNumericCharacters = confirm('Would you like Numeric characters in your password?');
    var hasSpecialCharacters = confirm('Would you like Special characters in your password?');
    
    // validate input and at least one character type should be selected
  if (!hasUppercaseCharacters === true && !hasLowercaseCharacters === true && !hasNumericCharacters === true && !hasSpecialCharacters === true){
    alert('Please select at least one option')
    return;
  }

  var characters = [];

  if (hasUppercaseCharacters) {
    characters = characters.concat(hasUppercaseCharacters)
  }

  if (hasLowercaseCharacters) {
    characters = characters.concat(hasLowercaseCharacters)
  }

  if (hasNumericCharacters) {
    characters = characters.concat(hasNumericCharacters)
  }

  if (hasSpecialCharacters) {
    characters = characters.concat(hasSpecialCharacters)
  }

  if (characters.length == 0) {
    alert('please select at least one of the character options by pressing ok');
    return;
  }

  var i;
  var password = "";
  for(var i = 0; i < length; i++) {
    var randomize = characters[Math.floor(Math.random * characters.length)];
    password = password.concat(randomize);
  }
  return password;

}

// generates a password that matches selected criteria
function arrayFromLowToHigh (low, high) {
  const array = []
  for(let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}



// password is generated in either an alter or displayed on the page
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
  //e.preventDefault();
}


// Add event listener to generate buttton
generateBtn.addEventListener('click', writePassword);