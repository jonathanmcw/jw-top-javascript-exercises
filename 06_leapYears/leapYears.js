const leapYears = function(year) {
    const isDivisibleByFour = year % 4 == 0;
    const isCentury = year % 100 == 0;
    const isYearDivisibleByFourHundred = year % 400 == 0;  
    
    return ( isDivisibleByFour && 
        (!isCentury || isYearDivisibleByFourHundred)) ? true: false;
};

// Do not edit below this line
module.exports = leapYears;
