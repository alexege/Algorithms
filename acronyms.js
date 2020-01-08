// Acronyms

// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. " , return "TNFL-GPYW" . 
// Given "Live from New York, it's Saturday Night!" , return "LFNYISN" .

var input = " there's no free lunch - gotta pay yer way. ";

function acronyms(input){
    var acronym = '';
    for(var i = 1; i < input.length; i++){
        if(input[i-1] == ' '){
            acronym += input[i].toUpperCase();
        }
    }
    return acronym;
}

console.log(acronyms(input));