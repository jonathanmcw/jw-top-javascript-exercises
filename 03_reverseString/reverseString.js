const reverseString = function(str) {
    // let output = "";
    // let len = str.length;
    // for ( let i = str.length - 1 ; i >= 0 ; i-- ) {
    //     output += str[i];
    // }
    // return output;
    return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
