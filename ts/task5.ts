var obj = {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
}

function objectToArray(obj: object): any[] {

    // создаем из обьекта массив ключ-значение и перебираем елементы
    return Object.entries(obj).map(([key, value]) =>

        // ищем обьект 
        typeof value === 'object'

            // если находим - рекурсивно создаем из него массив
            ? [key, objectToArray(value)]

            // если нет - возвращаем ключ-значение
            : [key, value]
    );
}

const res5 = objectToArray(obj);
console.log(res5);
