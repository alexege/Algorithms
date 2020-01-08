// Count Non-Spaces

// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy" , return 29 (not 35 ).

var input = "Honey pie, you are driving me crazy"

function countNonSpace(input){
    var count = 0;
    for(var i = 0; i < input.length; i++){
        if(input[i] != ' '){
            count++;
        }
    }
    return count;
}

console.log(countNonSpace(input));