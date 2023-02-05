const palindromes = function (str) {
    //Lowercase the string and use the RegExp to remove unwanted characters
    var reg = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');

    //Check whether the string is empty
    if (reg.length === 0) return false;

    //Reverse the string
    var reversed = reg.split('').reverse().join('');

    //Check if reversed is the same as the original
    return reg === reversed;
}

// Do not edit below this line
module.exports = palindromes;
