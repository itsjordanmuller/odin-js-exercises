const fibonacci = function(n) {
    if (typeof n !== 'number' || n < 0) {
      if (typeof n === 'string' && !isNaN(Number(n))) {
        n = Number(n);
      } else {
        return 'OOPS';
      }
    }

    let first = 0;
    let second = 1;
    let temp;

    for (let i = 0; i < n; i += 1) {
      temp = first;
      first = second;
      second = temp + second;
    }

    return first;
};
  
console.log(fibonacci(4)); // returns 3
console.log(fibonacci(6)); // returns 8
console.log(fibonacci(-1)); // returns 'OOPS'
console.log(fibonacci('string')); // returns 'OOPS'
console.log(fibonacci('1')); // returns 1

// Do not edit below this line
module.exports = fibonacci;
