"use strict";
const obj7 = {
    a: {
        b: {
            c: 12,
            d: 'Hello World'
        },
        e: [1, 2, 3]
    }
};
function mapObject(obj, parentKey = '') {
    return Object.keys(obj).reduce((acc, key) => {
        const newKey = parentKey ? `${parentKey}/${key}` : key;
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            acc = { ...acc, ...mapObject(obj[key], newKey) };
        }
        else {
            acc[newKey] = obj[key];
        }
        return acc;
    }, {});
}
const res7 = mapObject(obj7);
console.log(res7);
