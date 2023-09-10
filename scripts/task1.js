"use strict";
function deepEqual(obj1, obj2) {
    const stack1 = [obj1];
    const stack2 = [obj2];
    while (stack1.length > 0 && stack2.length > 0) {
        const currentObj1 = stack1.pop();
        const currentObj2 = stack2.pop();
        const keys1 = Object.keys(currentObj1);
        const keys2 = Object.keys(currentObj2);
        if (keys1.length !== keys2.length) {
            return false;
        }
        for (const key of keys1) {
            if (!currentObj2.hasOwnProperty(key)) {
                return false;
            }
            const value1 = currentObj1[key];
            const value2 = currentObj2[key];
            if (typeof value1 === 'object' && value1 !== null) {
                stack1.push(value1);
                stack2.push(value2);
                continue;
            }
            if (value1 !== value2) {
                return false;
            }
        }
    }
    return true;
}
console.log(deepEqual({ name: 'test' }, { name: 'test' }));
console.log(deepEqual({ name: 'test' }, { name: 'test1' }));
console.log(deepEqual({ name: 'test', data: { value: 1 } }, { name: 'test', data: { value: 2 } }));
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 }));
