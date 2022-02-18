//generate password function
var generatePassword = function() {
  
}

// prompt for password criteria
var passwordCriteria = function() {
  var promptCriteria = window.prompt('Please select which criteria to include in your password. Enter "LENGTH", "LOWERCASE", "UPPERCASE", "NUMERIC", or "SPECIALCHARS" to choose.');

  //enter the conditional recursive function call here!
  if (promptCriteria === "" || promptCriteria === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return passwordCriteria();
  }

  promptCriteria = promptCriteria.toLowerCase();

  // if 'length' we choose a length of at least 8 characters and no more than 12 characters.
  if (promptCriteria = "LENGTH") {
    var passwordLength = window.prompt('Choose a password length between 8 and 12 characters.');
    // if passwordLength is less than 8 or greater than 12, we ask to please input a valid number.
    if (passwordLength < 8 || passwordLength > 12) {
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordCriteria();
    } else {
      console.log(passwordLength);
    }
  }

  

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
