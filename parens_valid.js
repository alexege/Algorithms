// Parens Valid

// Create a function that, given an input string str , returns a boolean whether parentheses in
// str are valid. Valid sets of parentheses always open before they close, for example. 
// For "Y(3(p)p(3)r)s" , return true . Given "N(0(p)3" , return false : not every parenthesis is closed. 
// Given "N(0)t ) 0(k" , return false , because the underlined ")" is premature: 
// there is nothing open for it to close.

// var input = "Y(3(p)p(3)r)s";
// var input = "N(0(p)3";
var input = "N(0)t ) 0(k";

function parensValid(input){
    var opening = [];
    for(var i = 0; i < input.length; i++){
        if(input[i] == ')' && opening.length == 0){
            return false;
        }
        if(input[i] == '('){
            opening.push(input[i]);
        }
        if(input[i] == ')'){
            opening.pop();
        }
    }
    if(opening.length == 0){
        return true;
    } else {
        return false;
    }
}

console.log(parensValid(input));