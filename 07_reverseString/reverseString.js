const reverseString = function(str) {

    // solution: return string.split("").reverse().join("");
    
    const arr = [...str];

    let reversed = "";

    for (i = str.length - 1; i >= 0; i--) {
        reversed = reversed + arr[i];
    }

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
