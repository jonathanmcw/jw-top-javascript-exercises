const palindromes = function (input) {
    const arr = input.toLowerCase().split("").filter((char) => /^[a-zA-Z0-9]$/.test(char));
    const output = arr.join("");
    const revOutput = arr.reverse().join("");
    
    return output === revOutput;
};

// Do not edit below this line
module.exports = palindromes;
