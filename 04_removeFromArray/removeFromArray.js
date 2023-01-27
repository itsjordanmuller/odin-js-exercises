const removeFromArray = function(array, ...itemsToRemove) {
    return array.filter(item => itemsToRemove.indexOf(item) === -1);
}
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
