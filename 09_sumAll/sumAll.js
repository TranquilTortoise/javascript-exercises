const sumAll = function(numOne, numTwo) {

    if (Number.isInteger(numOne) === false || typeof numOne != 'number' || numOne < 0) {
        return 'ERROR'
    }
    if (Number.isInteger(numTwo) === false || typeof numTwo != 'number' || numTwo < 0) {
        return 'ERROR'
    }

    let sum = 0;
    const arr = [];

    if (numOne <= numTwo) {
        for (let i = numOne; i <= numTwo; i++) {
            arr.push(i);
        }
        } else {

        for (let i = numOne; i >= numTwo; i--) {
            arr.push(i);
        }
    }
    arr.forEach( (element) => {
        sum = sum + element;
    })
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
