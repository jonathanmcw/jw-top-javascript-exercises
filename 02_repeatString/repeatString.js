const repeatString = function(str, times = 1) {
    if (isNaN(times) || times < 0 ) return 'ERROR';
    let output = "";
    for ( let i = 0 ; i < times; i ++ ) {
        output += str;
    }
    return output; 
};

// Do not edit below this line
module.exports = repeatString;
