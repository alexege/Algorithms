// * Write a function that given a list of strings, returns the list sorted based on the length of each string
// i.e - ["programming", "simply", "rocks"] -> ["rocks", "simply", "programming"]

let list = ["programming", "simply", "rocks"];

function sortList(list){
    let lengths = [];
    
    for(let i = 0; i < list.length; i++){
        lengths.push(list[i].length);
    }
    // sortedList = [];

    // return sortedList;
    return lengths;
}

console.log(sortList(list));


// console.log(
// list.sort(function(a,b){
//     return a.length - b.length;
// }));