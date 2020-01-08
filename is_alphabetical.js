// Is Word Alphabetical

// Nikki, a queen of gentle sarcasm, loves the word facetiously .
// Lance helpfully points out that it is the only known English word that contains all five vowels in
// alphabetical order, and it even has a ‘y’ on the end! Nikki takes a break from debugging to turn and 
// give him an acid stare – indeed a look that was delivered arseniously .
// Given a string, return whether all contained letters are in alphabetical order .

// var input = 'abcdefg';
var input = 'abcgdef';

function isAlphabetical(input){
    var alphabet = 'abcdefghijklmnopqrstuvwyz';
    var lastIndex = 0;
    for(var i = 0; i < input.length; i++){
        for(var j = 0; j < alphabet.length; j++){
            if(input[i] == alphabet[j]){
                if(j < lastIndex){
                    return false;
                }
                lastIndex = j;
                break;
            }
        }
    }
    return true;
}

console.log(isAlphabetical(input));