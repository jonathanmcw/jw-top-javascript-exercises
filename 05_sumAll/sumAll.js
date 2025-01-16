const sumAll = function( x, y ) {
    if ( !Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0 ) return 'ERROR';
    if ( x >= y ) {
        let z = x;
        x = y;
        y = z;
    }

    let output = 0;
    for ( let i = x; i <= y; i++ ) {
        output += i;
    }

    return output;
};

// Do not edit below this line
module.exports = sumAll;
