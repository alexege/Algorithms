/*
    Given an array of strings, return a string containing only lowercase alphabetical letters in alphabetical order.
    Desired result: O(n) complexity

    Sample Input: ["greeneggs", "ham", "sam", "i", "am"]
    Sample Output: "aaaeeeggghimmmnrss"

    Sample Input: ["ace", "bdf"]
    Sample Output: "abcdef"
*/

let strings = ["greeneggs", "ham", "sam", "i", "am"];
console.log(strings.join("").split("").sort().join(""));
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
function merge(strings){
    let merged = strings.join("").split("");
    let loweronly = '';
    for(var i = 0; i < merged.length; i++){
        if(alphabet.includes(merged[i])){
            loweronly += merged[i];
        }
    }
    // for(var i = 0; i < alphabet.length; i++){
    //     for(var j = 0; j < merged.length; j++){
    //         if(merged[j] == alphabet[i]){
    //             loweronly += alphabet[i];
    //         }
    //     }
    // }
    return loweronly;
}

console.log(merge(strings));