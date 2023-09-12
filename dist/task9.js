"use strict";
function add(num) {
    const fn = (nextNum) => add(num + nextNum);
    fn.valueOf = () => num;
    return fn;
}
console.log((add(1)(2)).valueOf());
console.log(Number(add(1)(2)(5)));
console.log(Number(add(1)(2)(-3)(4)));
console.log(Number(add(1)(2)(3)(4)(-5)));
