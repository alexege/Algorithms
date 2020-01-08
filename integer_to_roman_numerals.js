//##INCOMPLETE##
// Integer to Roman Numerals

// Given a positive integer that is less than 4000, return a string containing that value in 
// Roman numeral representation. In this representation, 
// I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000.
// Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

var val = 349;
var val = 444;

function intToRoman(val){
    var numeral = '';
    if(val > 1000){
        numeral += 'M';
        val = val - 1000;
    }
    if(val > 500){
        numeral += 'D';
        val = val - 500;
    }
    if(val > 100){
        numeral += 'C';
        val -= 100;
    }
    if(val > 50){
        numeral += 'L';
        val -= 50;
    }
    if(val > 10){
        numeral += 'X';
        val -= 10;
    }
    if(val > 5){
        numeral += 'V';
        val -= 5;
    }
    if(val > 1){
        numeral += 'L';
        val -= 1;
    }
    return numeral;
}

console.log(intToRoman(val))