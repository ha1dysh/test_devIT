"use strict";
function bulkRun(funcs) {
    return Promise.all(funcs.map(([func, args]) => new Promise((resolve) => func(...args, resolve))));
}
const f1 = (cb) => {
    cb(1);
};
const f2 = (a, cb) => {
    cb(a);
};
const f3 = (a, b, cb) => {
    setTimeout(() => cb([a, b]), 1000);
};
bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]]
]).then((results) => {
    console.log(results);
});
