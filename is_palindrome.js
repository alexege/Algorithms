// String: Is Palindrome

// Create a function that returns a boolean whether the string is a strict palindrome.
// For "a x a" or "racecar" , return true . Do not ignore spaces, punctuation and capitalization: if given "Dud" or "oho!" , return false .

// var input = 'a x a';
var input = 'racecar';

function isPalindrome(input){

    var j = input.length-1;
    for(var i = 0; i < input.length/2; i++){
        if(input[i] !== input[j]){
            return false;
        }
        j--;
    }
    return true;
}

console.log(isPalindrome(input));