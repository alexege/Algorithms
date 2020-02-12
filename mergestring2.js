function sortString(str){
    var str = str.join("").split("")
    return str.sort().join("");
}

console.log(sortString(["ace", "bdf"]));