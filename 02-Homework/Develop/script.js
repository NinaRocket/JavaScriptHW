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


var pwLength = prompt("How many characters long does your password need to be? Please choose between 8 and 128 characters.")

if (pwLength < 8 || pwLength > 128) {


  alert("Your password must be between 8 and 128 characters");
  generate = false;
}


var usChar = prompt("Please enter s if you need a special characters for your password, press enter to continue.");

if (usChar === "s") {
  // pw.push(userSpecial);
  // console.log.apply(pw);
  pw += s;
}
var usChar = prompt("Please enter l if you need a special characters for your password, press enter to continue.");
if (usChar === "l") {
  // pw.push(l);
  pw += l;
}
var usChar = prompt("Please enter u if you need a special characters for your password, press enter to continue.");
if (usChar === "u") {
  // pw.push(u);
  pw += u;
}
var usChar = prompt("Please enter n if you need a special characters for your password, press enter to continue.");
if (usChar === "n") {
  // pw.push(n);
  pw += n;
}



for (i = 0; i < pwLength; i++) {
  password += pw.charAt([Math.floor(Math.random() * pw.length)]);

}

console.log(password);
console.log(pw);




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
