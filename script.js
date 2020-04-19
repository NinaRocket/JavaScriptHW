// Assignment Code
var generateBtn = document.querySelector("#generate");
//var generatePassword = document.querySelector("#password");


// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //string variables to hold each criteria type
  var userLowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var userUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXY'
  var userNumeric = '0123456789';
  var userSpecial = '!@#$%&*';

  //string variables for user input
  var l = userLowerCase;
  var s = userSpecial;
  var n = userNumeric;
  var u = userUpperCase;

  //string variable to hold initial password criteria
  var pw = "";



  //array to hold randomly generated characters the user needs
  var criteriaArray = [];

  //array to hold generated password
  var password1 = [];

  //initial prompt to ask the length of the password
  var pwLength = prompt("How many characters long does your password need to be? Please choose between 8 and 128 characters.")

  //conditional statement if input is out of range
  while (pwLength < 8 || pwLength > 128) {


    alert("Your password must be between 8 and 128 characters");
    var pwLength = prompt("How many characters long does your password need to be? Please choose between 8 and 128 characters.")

  }

  //series of prompts asking the user what character types they need
  var usChar = prompt("Please enter s if you need a special character for your password, press enter to continue.");

  if (usChar === "s") {

    criteriaArray.push(s.charAt([Math.floor(Math.random() * s.length)]));
    pw += s;
    console.log(criteriaArray);
  }
  var usChar = prompt("Please enter l if you need a lowercase characters for your password, press enter to continue.");
  if (usChar === "l") {

    criteriaArray.push(l.charAt([Math.floor(Math.random() * l.length)]));
    pw += l;
    console.log(criteriaArray);
  }
  var usChar = prompt("Please enter u if you need a uppercase characters for your password, press enter to continue.");
  if (usChar === "u") {

    criteriaArray.push(u.charAt([Math.floor(Math.random() * u.length)]));
    pw += u;
    console.log(criteriaArray);
  }
  var usChar = prompt("Please enter n if you need a number for your password, press enter to continue.");
  if (usChar === "n") {

    criteriaArray.push(n.charAt([Math.floor(Math.random() * n.length)]));
    pw += n;
    console.log(criteriaArray);
  }

  //for loop that generates a password into the array password1
  for (i = 0; i < pwLength; i++) {
    password1 += pw.charAt([Math.floor(Math.random() * pw.length)]);

  }

  //turning the password string into an array called finalPW
  var finalPW = password1.split("");

  //places criteria from the criteriaArray into the final password array
  Array.prototype.splice.apply(finalPW, [0, criteriaArray.length].concat(criteriaArray));

  //the final password array is then put into a single string
  var genPW = finalPW.join("");


  //passwordText.value = password;
  passwordText.value = genPW;

  console.log(password1);
  console.log(pw);
  console.log(finalPW);
  console.log(genPW);
}


generateBtn.addEventListener("click", writePassword);
