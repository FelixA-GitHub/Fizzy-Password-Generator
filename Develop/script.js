const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const num = '0123456789';
const special = '!@#$%&*_?-()';

function generateString(length) {
  let result = ' ';
  const charactersLength = lower.length;
  for ( let i = 0; i < length; i++ ) {
      result += lower.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

alert(generateString(5));


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
      window.alert("Length has been set!"); 
    }
    console.log(passwordLength);
  }

  // if 'lowercase' allow lowercase to be used
  var lowerConfirm = window.confirm("Do you want to include LOWERCASE letters?");
  if (lowerConfirm) {
    localStorage.setItem("lower", lower);
    window.confirm("We will include LOWERCASE letters.");

    function generateString(length) {
      let lowResult = ' ';
      const charactersLength = lower.length;
      for ( let i = 0; i < length; i++ ) {
          lowResult += lower.charAt(Math.floor(Math.random() * charactersLength));
      }
    
      return lowResult;
    }
    
    console.log(generateString(passwordLength));
  }
  else {
    window.confirm("We will not include LOWERCASE letters.");
  }

  // if 'uppercase' allow uppercase to be used
  var upperConfirm = window.confirm("Do you want to include UPPERCASE letters?");
  if (upperConfirm) {
    localStorage.setItem("upper", upper);
    window.confirm("We will include UPPERCASE letters.");

    function generateString(length) {
      let upResult = ' ';
      const charactersLength = upper.length;
      for ( let i = 0; i < length; i++ ) {
          upResult += upper.charAt(Math.floor(Math.random() * charactersLength));
      }
    
      return upResult;
    }
    
    console.log(generateString(passwordLength));
  
  }
  else {
    window.confirm("We will not include UPPERCASE letters.");
  }

  // if 'numeric' allow numbers to be used
  var numConfirm = window.confirm("Do you want to include NUMBERS?");
  if (numConfirm) {
    localStorage.setItem("num", num);
    window.confirm("We will include NUMBERS.");

    function generateString(length) {
      let numResult = ' ';
      const charactersLength = num.length;
      for ( let i = 0; i < length; i++ ) {
          numResult += num.charAt(Math.floor(Math.random() * charactersLength));
      }
    
      return numResult;
    }
    
    console.log(generateString(passwordLength));
  
  }
  else {
    window.confirm("We will not include NUMBERS.");
  }

  // if 'specialchars' allow special characters to be used
  var spCharsConfirm = window.confirm("Do you want to include SPECIAL CHARACTERS?");
  if (spCharsConfirm){
    localStorage.setItem("special", special);
    window.confirm("We will include SPECIAL CHARACTERS.");

    function generateString(length) {
      let spCharResult = ' ';
      const charactersLength = special.length;
      for ( let i = 0; i < length; i++ ) {
          spCharResult += special.charAt(Math.floor(Math.random() * charactersLength));
      }
    
      return spCharResult;
    }
    
    console.log(generateString(passwordLength));
  
  }
  else {
    window.confirm("We will not include SPECIAL CHARACTERS.");
  }
  

};

// program to generate random strings

//variable to store local storage selections

// function randomNum(hi){
//   return Math.floor(Math.random()*hi);
// } 
// function randomUpChar(){
//   return String.fromCharCode(randomNum()).toUpperCase();
// }
// function randomLowChar(){
//   return String.fromCharCode(randomNum()).toLowerCase();
// }
// function randomSpChar(){
//   return String.fromCharCode(randomNum(100));
// }
// function randomString(length){
//  var str = "";
//  for(var i = 0; i < length; ++i){
//       str += randomUpChar() && randomLowChar() &&randomSpChar();
//  }
//  return str;
// }
// var RandomString = randomString(30); //32 length string

// alert(RandomString);

// function keyGen(keyLength) {
//   var i, key = "", characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

//   var charactersLength = characters.length;

//   for (i = 0; i < keyLength; i++) {
//       key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
//   }

//   return key;
// }


// keyGen(12);

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
