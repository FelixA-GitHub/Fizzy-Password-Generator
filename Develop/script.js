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
  var promptCriteria = window.prompt('Please select which criteria to include in your password. Please type "LENGTH" to start.');

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
      window.alert("Length has been set!"); 
    }
  }

  // if 'lowercase' allow lowercase to be used
  var lowerConfirm = window.confirm("Do you want to include LOWERCASE letters?");
  if (lowerConfirm) {
    localStorage.setItem("lower", lower);
    window.confirm("We will include LOWERCASE letters.");
  }
  else {
    window.confirm("We will not include LOWERCASE letters.");
  }

  // if 'uppercase' allow uppercase to be used
  var upperConfirm = window.confirm("Do you want to include UPPERCASE letters?");
  if (upperConfirm) {
    localStorage.setItem("upper", upper);
    window.confirm("We will include UPPERCASE letters.");
  }
  else {
    window.confirm("We will not include UPPERCASE letters.");
  }

  // if 'numeric' allow numbers to be used
  var numConfirm = window.confirm("Do you want to include UPPERCASE letters?");
  if (numConfirm) {
    localStorage.setItem("num", num);
    window.confirm("We will include NUMBERS.");
  }
  else {
    window.confirm("We will not include NUMBERS.");
  }

  // if 'specialchars' allow special characters to be used
  var spCharsConfirm = window.confirm("Do you want to include SPECIAL CHARACTERS?");
  if (spCharsConfirm){
    localStorage.setItem("special", special);
    window.confirm("We will include SPECIAL CHARACTERS.");
  }
  else {
    window.confirm("We will not include NUMBERS.");
  }
  

};

//variable to store local storage selections

function keyGen(keyLength) {
  var i, key = "", characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  var charactersLength = characters.length;

  for (i = 0; i < keyLength; i++) {
      key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
  }

  return key;
}


keyGen(12);

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
