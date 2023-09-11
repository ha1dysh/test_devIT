"use strict";
var arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];
function arrayToObject(arr) {
    return arr.reduce((acc, [key, value]) => {
        Array.isArray(value)
            ? acc[key] = arrayToObject(value)
            : acc[key] = value;
        return acc;
    }, {});
}
const res = arrayToObject(arr);
console.log(res);
