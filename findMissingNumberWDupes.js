//Input
var input = [1, 4, 3, 6, 2, 1];

//Expected output: 5

function findMissing(input){
  var lowest = input[0];
  var highest = input[0];

  //Figure out highest/lowest numbers in array
  for(var i = 0; i < input.length; i++){
    if(input[i] > highest){
      highest = input[i];
    }
    if(input[i] < lowest){
      lowest = input[i];
    }
  }
  
  //Create a new array excluding all duplicates
  var dupeless = [];
  var expectedSum = 0;
  var actualSum = 0;
  for(var i = lowest; i <= highest; i++){
    expectedSum += i;
  	var count = 0;
  	for(var j = 0; j < input.length; j++){
          if(i == input[j]){
              count++;
              if(count == 1){
                actualSum += input[j];
                dupeless.push(i);
            }
        }
    }
  }

  //Add all non duped numbers together and figure out the actual sum vs the expected sum
  console.log("Expected Sum: ", expectedSum);
  console.log("Actual Sum: ", actualSum);

  //Figure out the missing number and return it
  var missingNumber = expectedSum - actualSum;
  return missingNumber;
}

console.log(findMissing(input));