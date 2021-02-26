// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Make the variable arrays we will use later

  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// blank arrays we will fill in later
  var resultsArray = [];
  var passwordArray = [];
// ask for the lenght of the password
  var passLength = prompt("How many characters are in your password?  (8-128)");

  if (
    passLength > 7 && passLength < 129

  ) {

//boolean to see which type of characters we can use
    var lower = confirm("Do you want lowercase letters in your password? (Ok=Yes, Cancel =No)");
    var upper = confirm("Do you want uppercase letters in your password? (Ok=Yes, Cancel =No)");
    var numbers = confirm("Do you want numbers in you password? (Ok=Yes, Cancel =No)");
    var special = confirm("Do you want special characters in your password? (Ok=Yes, Cancel =No)");

// we check each of our categories and if true, concat combines that specific array
    if (lower) {
      resultsArray = resultsArray.concat(lowerArray);
    }

    if (upper) {
      resultsArray = resultsArray.concat(upperArray);
    }

    if (numbers) {
      resultsArray = resultsArray.concat(numbersArray);
    }

    if (special) {
      resultsArray = resultsArray.concat(specialArray);
    }

    //to check if the array combined correctly
    console.log(resultsArray)


    // For loop to keep running our equation as many times as the passLength
    for (var i = 0; i < passLength; i++) {
      //each time this runs .push adds on a new letter to our passwordArray
      // multiply the length of our results array by the random 0 to 1 value, and then round down
      passwordArray.push(resultsArray[Math.floor(Math.random() * resultsArray.length)]);
    }

    //see the array that was created from our equation
    console.log(passwordArray)

    return passwordArray.join("");
  }







  // why is this not working

  else {
    alert = ("Password must be between 8 and 128 charcters!");
  }

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

