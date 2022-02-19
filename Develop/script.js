const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789';
const special = '!@#$%&*_?-()';


//generate password function with random lowercase, uppercase, numbers, special characters of a predetermined length between 8 and 128 characters.
var generatePassword = function() {
  let lower = localStorage.getItem("lower");
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

  // if 'length' we choose a length of at least 8 characters and no more than 128 characters.
  if (promptCriteria === "length") {
    var passwordLength = window.prompt('Choose a password length between 8 and 128 characters.');
    
    // if passwordLength is less than 8 or greater than 12, we ask to please input a valid number.
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You need to provide a valid answer! Please try again.");
      return passwordCriteria();
    } else {
      localStorage.setItem("passwordLength", passwordLength);
    }
  }

  // if 'lowercase' allow lowercase to be used
  if (promptCriteria === "lowercase") {
    localStorage.setItem("lower", lower);
    window.confirm("We will include LOWERCASE letters.");
  }
  // if 'uppercase' allow uppercase to be used
  if (promptCriteria === "uppercase") {
    localStorage.setItem("upper", upper);
    window.confirm("We will include UPPERCASE letters.");
  }
  // if 'numeric' allow numbers to be used
  if (promptCriteria === "numeric") {
    localStorage.setItem("num", num);
    window.confirm("We will include NUMBERS.");
  }
  // if 'specialchars' allow special characters to be used
  if (promptCriteria === "specialchars"){
    localStorage.setItem("special", special);
    window.confirm("We will include SPECIAL CHARACTERS.");
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
