/*
  Recursive Binary Search

  Given a sorted array and a value, recursively determine whether value is found within array. rBinarySearch([1,3,5,6],4) = false ; rBinarySearch([4,5,6,8,12],5) = true .

  Take the middle item and compare it to the given value.
  Based on that comparison, slice your given array and send it back into the function.
*/

let arr = [1, 2, 3, 4, 5, 6];
let val = 4;

function binarySearch(arr, val){
  let midIdx = Math.floor((arr.length)/2);
  if(arr[midIdx] === val){
    return true;
  }
  if(arr[midIdx] < val){
    return binarySearch(arr.slice(midIdx), val);
  }
  return binarySearch(arr.slice(0, midIdx), val);
}

console.log(binarySearch(arr, val));