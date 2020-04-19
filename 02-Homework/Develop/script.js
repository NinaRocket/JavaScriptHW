// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var userLowerCase = 'abcdefghijklmnopqrstuvwxyz';
var userUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXY'
var userNumeric = '0123456789';
var userSpecial = '!@#$%&*';

var l = userLowerCase;
var s = userSpecial;
var n = userNumeric;
var u = userUpperCase;

var pw = "";
var generate = true;
var criteriaArray = [];
var password1 = [];

var pwLength = prompt("How many characters long does your password need to be? Please choose between 8 and 128 characters.")

if (pwLength < 8 || pwLength > 128) {


  alert("Your password must be between 8 and 128 characters");
  //generate === false;
}


var usChar = prompt("Please enter s if you need a special characters for your password, press enter to continue.");

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


for (i = 0; i < pwLength; i++) {
  password1 += pw.charAt([Math.floor(Math.random() * pw.length)]);

}

var finalPW = password1.split("");


Array.prototype.splice.apply(finalPW, [0, criteriaArray.length].concat(criteriaArray));

var genPW = finalPW.join("");


console.log(password1);
console.log(pw);
console.log(finalPW);
console.log(genPW);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
