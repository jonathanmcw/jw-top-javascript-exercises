const fibonacci = function(x) {
    x = parseInt(x);
    if ( typeof x !== "number" || x < 0 ) { 
        return "OOPS"
    } 

    const arr = [0, 1];
    for ( let i = 2; i <= x; i++ ) {
        arr[i] = arr[i-1] + arr[i-2];
        console.log(arr[i])
    }

    return arr[x];
};

// Do not edit below this line
module.exports = fibonacci;
