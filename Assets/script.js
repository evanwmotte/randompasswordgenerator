var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "<", ">", "{", "}", "[", "]", "/"]





function generate() {
    
    var length = prompt("How long would you like your password to be?");

        while(length < 8 || length > 128) {
            alert("Your password must be between 8 and 128 characters");
            var length = prompt("How long would you like your password to be?");
    }
    
    var useUpper = confirm("Would you like to use uppercase letters?");
    var useLower = confirm("Would you like to use lowercase letters?");
    var useNumbers = confirm("Would you like to use numbers?");
    var useSymbols = confirm("Would you like to use special characters?");

        while(useUpper === false && useLower === false && useNumbers === false && useSymbols === false) {
            alert("Your password has to have something in it! It can't be blank!");
            var useUpper = confirm("Would you like to use uppercase letters?");
            var useLower = confirm("Would you like to use lowercase letters?");
            var useNumbers = confirm("Would you like to use numbers?");
            var useSymbols = confirm("Would you like to use special characters?");
    }

    var characters = [];

    /*if (useUpper === true) {
        characters.concat(upperCase);
    }*/

    if (useUpper === true && useLower === true && useNumbers === true && useSymbols === true) {
        characters = upperCase.concat(lowerCase, numbers, symbols);
    } else if (useUpper === true && useLower === true && useNumbers === true && useSymbols === false){
        characters = upperCase.concat(lowerCase, numbers);
    } else if (useUpper === true && useLower === true && useNumbers === false && useSymbols === true){
        characters = upperCase.concat(lowerCase, symbols);
    } else if (useUpper === true && useLower === false && useNumbers === true && useSymbols === true){
        characters = upperCase.concat(numbers, symbols);
    } else if (useUpper === false && useLower === true && useNumbers === true && useSymbols === true){
        characters = lowerCase.concat(numbers, symbols);
    } else if (useUpper === false && useLower === false && useNumbers === true && useSymbols === true){
        characters = numbers.concat(symbols);
    } else if (useUpper === false && useLower === true && useNumbers === false && useSymbols === true){
        characters = lowerCase.concat(symbols)
    } else if (useUpper === false && useLower === true && useNumbers === true && useSymbols === false){
        characters = lowerCase.concat(numbers)
    } else if (useUpper === true && useLower === false && useNumbers === false && useSymbols === true){
        characters = upperCase.concat(symbols);
    } else if (useUpper === true && useLower === false && useNumbers === true && useSymbols === false){
        characters = upperCase.concat(numbers);
    } else if (useUpper === true && useLower === true && useNumbers === false && useSymbols === false){
        characters = upperCase.concat(lowerCase)
    } else if (useUpper === false && useLower === false && useNumbers === false && useSymbols === true){
        characters = symbols;
    } else if (useUpper === false && useLower === false && useNumbers === true && useSymbols === false){
        characters = numbers;
    } else if (useUpper === false && useLower === true && useNumbers === false && useSymbols === false){
        characters = lowerCase;
    } else if (useUpper === true && useLower === false && useNumbers === false && useSymbols === false){
        characters = upperCase;
    };

    var finishedPassword = "";

    for (var i = 0; i < length; i++) {
        finishedPassword += characters[Math.floor(Math.random() * characters.length)];
        

    }

    var passwordText = document.querySelector("#password");
        passwordText.value = finishedPassword.toString();

    }
