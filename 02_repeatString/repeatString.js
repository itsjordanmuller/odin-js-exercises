const repeatString = function(string, num) {
    if (num<0) return "ERROR";
    return string.repeat(num);
};
console.log(repeatString("string", -10));

// Do not edit below this line
module.exports = repeatString;
