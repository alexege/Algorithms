// Write a function that given a list of countries, returns the country(s) that occur the least times
// i.e - ["Argentina", "Cuba", "Chile", "Argentina"] -> ["Cuba", "Chile"]
const countries = ["Argentina", "Cuba", "Chile", "Argentina"];

// Questions to ask:
// 1. Will there always be duplicates?
// 2. Do you want the country(s) with the absolute least occurences, or a variety of ranges?

function returnLeast(countries){
    let countryCount = {};
    for(let i = 0; i < countries.length; i++){
        if(countryCount[countries[i]] != null){
            countryCount[countries[i]] += 1;
        }else{
            countryCount[countries[i]] = 1;
        }
    }

    let smallestOccurence = Math.pow(10, 1000);
    let smallest = "";
    for(var key in countryCount){
        if(countryCount[key] < smallestOccurence){
            smallestOccurence = countryCount[key];
            smallest = key;
        }
        // console.log(countryCount[key]);
    }

    let lowest = [];
    for(var key in countryCount){
        if(countryCount[key] == smallestOccurence){
            lowest.push(key);
        }
    }
    return lowest;
}

console.log(returnLeast(countries));