function add(num: number) {
    const fn = (nextNum: number) => add(num + nextNum);

    // valueOf - метод возвращает примитивное свойство обьекта
    // добавив его на fn - Number() вернет текущее число
    fn.valueOf = () => num;

    return fn;
}

console.log((add(1)(2)).valueOf()); // == 3
console.log(Number(add(1)(2)(5))); // == 8
console.log(Number(add(1)(2)(-3)(4))); // == 4
console.log(Number(add(1)(2)(3)(4)(-5))); // == 5
