// Common Suffix
//##Incomplete##

// Lance is writing his opus: Epitome , an epic tome of beat poetry.
// Always ready for a good rhyme, he constantly seeks words that end with the same letters.
// Write a function that, when given a word array, returns the largest suffix (word-end) common to all words in the array.
// For inputs ["deforestation", "citation", "conviction", "incarceration"] , return "tion" (not all that creative a rhyming point).
// If it is ["nice", "ice", "baby"] , return "" , because that’s just … not .

// var input = ["nice", "ice", "baby"];
var input = ["deforestation", "citation", "conviction", "incarceration"];

function commonSuffix(input){

    var longestIdx = 0, shortestIdx = 0;
    var suffix = '';

    for(var i = 0; i < input.length; i++){
        if(input[i].length > input[longestIdx].length){
            longestIdx = i;
        }
        if(input[i].length < input[shortestIdx].length){
            shortestIdx = i;
        }
    }

    console.log("shortest:", input[shortestIdx]);
    console.log("longest:", input[longestIdx]);
    
    for(var i = input[shortestIdx].length - 1; i > 0; i--){
        for(var j = input[longestIdx].length - 1; j > 0; j--){
            if(input[shortestIdx][i] == input[longestIdx][j]){
                suffix += input[shortestIdx][i];
                break;
            }
        }
    }

    console.log("suffix:", suffix);
    return suffix;
}

console.log(commonSuffix(input));