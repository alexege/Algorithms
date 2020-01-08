// Remove Shorter Strings

// Given a string array and value (length), remove any strings shorter than length from the array.

//Method 1, creating a new array
var input = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];

function remove_shorter(input, value){
    var new_arr = [];
    for(var i = 0; i < input.length; i++){
        if(input[i].length > value){
            new_arr.push(input[i]);
        }
    }
    return new_arr;
}

console.log(remove_shorter(input, 4));