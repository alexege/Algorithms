// D Gets Jiggy

// Write a function that accepts as a parameter a string containing someone’s name.
// Return a string containing the following oh-so-cool greeting: strip off the first letter of the name,
// capitalize this new word, and add " to the [first letter] !" Given "Dylan" , return "Ylan to the D!"

var input = 'Dylan';

function getJiggy(input){
    var first_letter = input[0];
    var new_word = input[1].toUpperCase() + '';

    for(var i = 2; i<input.length; i++){
        new_word += input[i];
    }
    new_word += ' to the ' + first_letter;
    return new_word;
}

console.log(getJiggy(input));