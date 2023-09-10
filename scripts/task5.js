"use strict";
var obj = {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
};
function objectToArray(obj) {
    return Object.entries(obj).map(([key, value]) => typeof value === 'object'
        ? [key, objectToArray(value)]
        : [key, value]);
}
const res5 = objectToArray(obj);
console.log(res5);
