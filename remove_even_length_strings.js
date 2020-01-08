// Remove Even-Length Strings

// Build a standalone function to remove strings of even lengths from a given array. 
// For array containing ["Nope!","Its","Kris","starting","with","K!"," 
// (instead","of","Chris","with","C)","."] , change that same array to ["Nope!","Its","Chris","."] .

var arr = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."];

function remove_even_length(arr){
    var non_even = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].length % 2 != 0){
            non_even.push(arr[i]);
        }
    }
    return non_even;
}

console.log(remove_even_length(arr));