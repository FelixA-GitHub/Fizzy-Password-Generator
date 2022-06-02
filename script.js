let lower = 'abcdefghijklmnopqrstuvwxyz';
let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let num = '0123456789';
let special = '!@#$%&*_?-()';

// let length = 5;
// let key = '';
// let i = 0;
// let lower = 'abcdefghijklmnopqrstuvwxyz';

// do {
//   i = i + 1;
//   key = lower + i;

// } while (i < 5);

// console.log(key.substr(Math.floor((Math.random() * i) + 1), length));


// prompt for password criteria
var generatePassword = function() {
  var promptCriteria = window.prompt('Please select which criteria to include in your password. Please type "LENGTH" to start.');

  //enter the conditional recursive function call here!
  if (promptCriteria === "" || promptCriteria === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }

  // if 'length' we choose a length of at least 8 characters and no more than 128 characters.
  if (promptCriteria === "length" || promptCriteria === "LENGTH") {
    var passwordLength = window.prompt('Choose a password length between 8 and 128 characters.');
    
    // if passwordLength is less than 8 or greater than 12, we ask to please input a valid number.
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("You need to provide a valid answer! Please try again.");
      return generatePassword();
    } 
    console.log(passwordLength);
  }


  // if 'lowercase' allow lowercase to be used
  var lowerConfirm = window.confirm("Do you want to include LOWERCASE letters?");
  if (lowerConfirm) {
    localStorage.setItem("lower", lower);
    var keyGen = function(keyLength) {
      var i, key = "", characters = lower;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
    
  } 

  // if 'uppercase' allow uppercase to be used
  var upperConfirm = window.confirm("Do you want to include UPPERCASE letters?");
  if (upperConfirm) {
    localStorage.setItem("upper", upper);
    var keyGen = function(keyLength) {
      var i, key = "", characters = upper;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  } 

  // if 'numeric' allow numbers to be used
  var numConfirm = window.confirm("Do you want to include NUMBERS?");
  if (numConfirm) {
    localStorage.setItem("num", num);
    var keyGen = function(keyLength) {
      var i, key = "", characters = num;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  }

  // if 'specialchars' allow special characters to be used
  var spCharsConfirm = window.confirm("Do you want to include SPECIAL CHARACTERS?");
  if (spCharsConfirm){
    localStorage.setItem("special", special);
    var keyGen = function(keyLength) {
      var i, key = "", characters = special;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  }
  
  if (lowerConfirm && upperConfirm){
    localStorage.setItem("lower", lower);
    localStorage.setItem("upper", upper);
    
    var keyGen = function(keyLength) {
      var i, key = "", characters = lower + upper;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  }

  if (lowerConfirm && numConfirm){
    localStorage.setItem("lower", lower);
    localStorage.setItem("num", num);
    
    var keyGen = function(keyLength) {
      var i, key = "", characters = lower + num;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  }

  if (lowerConfirm && spCharsConfirm){
    localStorage.setItem("lower", lower);
    localStorage.setItem("special", special);
    
    var keyGen = function(keyLength) {
      var i, key = "", characters = lower + special;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  }

  if (lowerConfirm && upperConfirm && numConfirm){
    localStorage.setItem("lower", lower);
    localStorage.setItem("upper", upper);
    localStorage.setItem("num", num);
    
    var keyGen = function(keyLength) {
      var i, key = "", characters = lower + upper + num;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  }

  if (lowerConfirm && upperConfirm && spCharsConfirm){
    localStorage.setItem("lower", lower);
    localStorage.setItem("upper", upper);
    localStorage.setItem("special", special);
    
    var keyGen = function(keyLength) {
      var i, key = "", characters = lower + upper + special;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  }

  if (upperConfirm && numConfirm){
    localStorage.setItem("num", num);
    localStorage.setItem("upper", upper);
    
    var keyGen = function(keyLength) {
      var i, key = "", characters = num + upper;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  }

  if (upperConfirm && spCharsConfirm){
    localStorage.setItem("upper", upper);
    localStorage.setItem("special", special);
    
    var keyGen = function(keyLength) {
      var i, key = "", characters = upper + special;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  }


  if (upperConfirm && numConfirm && spCharsConfirm){
    localStorage.setItem("special", special);
    localStorage.setItem("upper", upper);
    localStorage.setItem("num", num);
    
    var keyGen = function(keyLength) {
      var i, key = "", characters = special + upper + num;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    
    console.log(keyGen(passwordLength));
  }

  if (numConfirm && spCharsConfirm){
    localStorage.setItem("num", num);
    localStorage.setItem("special", special);
    
    var keyGen = function(keyLength) {
      var i, key = "", characters = num + special;
    
      var charactersLength = characters.length;
    
      for (i = 0; i < keyLength; i++) {
          key += characters.substr(Math.floor((Math.random() * charactersLength) + 1), 1);
      }
    
      return key;
    }
    
    console.log(keyGen(passwordLength));
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
