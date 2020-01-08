// Braces Valid

// Given a sequence of parentheses, braces and brackets, determine whether it is valid. 
// Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true . "D(i{a}l[ t]o)n{e" => false . 
// "A(1)s[O (n]0{t) 0}k" => false .

// var input = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
var input = "D(i{a}l[ t]o)n{e";

function bracesValid(input){
    var opening = [];

    var map = {
        '(':')',
        '{':'}',
        '[':']'
    };

    for(var i = 0; i < input.length; i++){
        if(input[i] == '(' || input[i] == '{' || input[i] == '['){
            opening.push(input[i]);
        }
        if(input[i] == ')' || input[i] == '}' || input[i] == ']'){
            var removed = opening.pop();
            if(input[i] !== map[removed]){
                return false;
            }
        }
    }

    if(opening.length !== 0){
        return false;
    }
    return true;
}

console.log(bracesValid(input));