const add = function(...theArgs) {

  return theArgs.reduce((sum, currentItem) => {
    return sum + currentItem;
  }, 0);
};

const subtract = function(firstArg, ...theArgs) {

  return theArgs.reduce((difference, currentItem) => {
    return difference - currentItem;
  }, firstArg);
	
};

const sum = function(arr) {

  let sum = 0;

  arr.forEach((element) => {
    sum = sum + element;
  });
  return sum;
};

const multiply = function(arr) {

  let total = 1;

  arr.forEach((element) => {
    total = total * element;
  });
  return total;
};

const power = function(num, power) {

  let answer = 1
	
  for (let i = 0; i < power; i++) {
    answer = answer * num;
  }

  return answer;
};

const factorial = function(num) {
  if (num === 0 || num === 1) { return 1; }

  return num * factorial(num-1);
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
