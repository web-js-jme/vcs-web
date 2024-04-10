function sum(a, b) {
    return a+b;
}

function countRadius(r) {
    return 3.14 * (r * r)
}

function palindrome(str) {
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase()
    const reverseStr = cleanStr.split('').reverse().join('')
    return cleanStr === reverseStr
}

const myAarray = [5,6,7];
function maxNumberFromArray(myAarray) {
    return Math.max(myAarray);
}


function addPriceObject(object) {
    if(object.kaina) {
        return 'Object has already added';
    }
    object.kaina = 50;
    return object;
}

function checkIsNull(object) {
    const empty = object;
    return empty;
}


palindrome("A man, a plan, a canal. Panama");
maxNumberFromArray(myAarray);


module.exports = { sum, countRadius, palindrome , maxNumberFromArray, addPriceObject, checkIsNull };
