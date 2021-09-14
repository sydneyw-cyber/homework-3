// Assignment Code

//Create variables for character options
var uppercaseCharacters = [
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

var lowercaseCharacters = [
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

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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

  if (characters) {
    characters = characters.concat(hasUppercaseCharacters)
  }

  if (characters) {
    characters = characters.concat(hasLowercaseCharacters)
  }

  if (characters) {
    characters = characters.concat(hasNumericCharacters)
  }

  if (characters) {
    characters = characters.concat(hasSpecialCharacters)
  }

  var i;

  var password = "";

  for(var i = 0; i < length; i++) {
    var randomize = characters[Math.floor(Math.random * characters.length)];
    password = password.concat(randomize);
  }
  return password;

  // var selections = {
  //   length: length,
  //   hasUppercaseCharacters: hasUppercaseCharacters,
  //   hasLowercaseCharacters: hasLowercaseCharacters,
  //   hasNumericCharacters: hasNumericCharacters,
  //   hasSpecialCharacters: hasSpecialCharacters,
  // }
  // return selections;
}

// function randomize(arr){
//   var randIndex = Math.floor(Math.random() * arr.length);
//   var randElement = arr[randIndex];
  
//   return randElement;
// }  

// generates a password that matches selected criteria
// function arrayFromLowtoHigh (low, high) {
//   const array = []
//   for(let i = low; i <= high; i++) {
//     array.push(i)
//   }
//   return array
// }


// Create generate password function
// function generatePassword() {
//   var options = passwordOptions();
  
//   var output = [];
  
//   var characters = [];
  
//   var generatedCharacters = [];
  
//   if (options.hasLowercaseCharacters){
//     characters = characters.concat(lowercaseCharacters);
//     generatedCharacters.push(randomize(lowercaseCharacters));
//   }
  
//   if (options.hasUppercaseCharacters){
//     characters = characters.concat(uppercaseCharacters);
//     generatedCharacters.push(randomize(uppercaseCharacters));
//   }
  
//   if (options.hasNumericCharacters){
//     characters = characters.concat(numericCharacters);
//     generatedCharacters.push(randomize(numericCharacters));
//   }
  
//   if (options.hasSpecialCharacters) {
//     characters = characters.concat(specialCharacters);
//     generatedCharacters.push(randomize(specialCharacters));
//   }
  
//   for (var i = 0; i < options.length; i++) {
//     var characters = randomize(characters);
    
//     output.push(characters);
//   }
  
//   for(var i = 0; i < generatedCharacters.length; i++){
//     output[i] = generatedCharacters[i];
//   }
  
//   return output.join('')
  
// }

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