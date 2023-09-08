"use strict";
function deepEqual(obj1, obj2) {
    // создаем массивы с обьектами
    const stack1 = [obj1];
    const stack2 = [obj2];
    // перебераем обьекты и если находим вложенный обьект пушим в массив
    // повторяем пока массив не будет пустой
    while (stack1.length > 0 && stack2.length > 0) {
        // достаем обьект из массива
        const currentObj1 = stack1.pop();
        const currentObj2 = stack2.pop();
        // достаем ключи из обьектов
        const keys1 = Object.keys(currentObj1);
        const keys2 = Object.keys(currentObj2);
        // false если колличество ключей разное
        if (keys1.length !== keys2.length) {
            return false;
        }
        // перебираем ключи
        for (const key of keys1) {
            // false если во втором обьекте нет свойства из первого обьекта
            if (!currentObj2.hasOwnProperty(key)) {
                return false;
            }
            // берем по одному значению из обьектов
            const value1 = currentObj1[key];
            const value2 = currentObj2[key];
            // проверяем на вложеность
            // если это обьекты - пушим в массив и начинаем заново
            if (typeof value1 === 'object' && value1 !== null) {
                stack1.push(value1);
                stack2.push(value2);
                continue;
            }
            // если не обьекты - сравниваем значения
            if (value1 !== value2) {
                return false;
            }
        }
    }
    // цикл перебрал оба обьекта и проверил на вложенность
    // и если не выкинул false то обьтекты равны
    return true;
}
console.log(deepEqual({ name: 'test' }, { name: 'test' }));
console.log(deepEqual({ name: 'test' }, { name: 'test1' }));
console.log(deepEqual({ name: 'test', data: { value: 1 } }, { name: 'test', data: { value: 2 } }));
console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 }));
