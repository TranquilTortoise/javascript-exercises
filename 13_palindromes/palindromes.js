const palindromes = function (str) {

    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const charArr = [...cleanStr];
    const reversedArr = [...charArr].reverse();

    const reversedStr = reversedArr.join("");

    if (reversedStr == cleanStr) {return true;}

    return false;
};

// Do not edit below this line
module.exports = palindromes;
