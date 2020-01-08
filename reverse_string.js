// String: Reverse

// Implement reverseString(str) that, given string, returns that string with characters reversed. 
// Given "creature" , return "erutaerc". Tempting as it seems, do not use the built-in reverse() !

var str = 'creature';

function reverseString(str){
    var temp = '';
    for(var i = str.length - 1; i > 0; i--){
        temp += str[i];
    }
    str = temp;
    return str;
}

console.log(reverseString(str));