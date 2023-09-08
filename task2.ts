// функция генератор
function* chunkArray(arr: any[], size: number) {
	let index = 0;

	// цикл разделит массив на чанки
	while (index < arr.length) {
		// yield даст возможность использовать встроенный в генератор метод некст
		yield arr.slice(index, (index += size));
	}
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator);

console.log(iterator.next()); // { value: [1,2,3], done: false }
console.log(iterator.next()); // { value: [4,5,6], done: false }
console.log(iterator.next()); // { value: [7,8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }
