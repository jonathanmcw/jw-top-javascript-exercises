const removeFromArray = function(arr, ...match) {
    return arr.filter(item => !match.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
