// String: Get Digits

// Create a JavaScript function that given a string, returns the integer made from the string’s digits.
// Given "0s1a3y5w7h9a2t4?6!8?0" , the function should return the number 1357924680 .

var input = '0s1a3y5w7h9a2t4?6!8?0';

function getDigits(input) {
    var numberString = '';
    for(var i = 0; i < input.length; i++){
        var intgr = parseInt(input[i]);
        if(!isNaN(intgr)){
            numberString += input[i];
        }
    }
    return numberString;
}

console.log(getDigits(input));
