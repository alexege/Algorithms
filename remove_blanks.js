// Remove Blanks

// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c " , return "PlayThatFunkyMusic" .

var input = "this is a test";
function removeSpaces(input){
    var str_no_space = '';
    for(var i = 0; i < input.length; i++){
        if(input[i] != ' '){
            str_no_space += input[i];
        }
    }
    return str_no_space;
}

console.log(removeSpaces(input));