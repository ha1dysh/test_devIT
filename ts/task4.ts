var arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];

function arrayToObject(arr: any[]) {

    // проходимся по массиву редюсом, деструктурируем key value
    return arr.reduce((acc, [key, value]) => {
        Array.isArray(value)
            // если value массив - рекурсивно создаем новый обьект
            ? acc[key] = arrayToObject(value)
            // если нет - создаем ключ с таким значением
            : acc[key] = value
        // на каждой итерации возвращаем обьект аккумулятор
        return acc
    },
        {})
}

const res = arrayToObject(arr);
console.log(res);
