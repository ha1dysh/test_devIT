"use strict";
function* chunkArray(arr, size) {
    let index = 0;
    while (index < arr.length) {
        yield arr.slice(index, (index += size));
    }
}
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
