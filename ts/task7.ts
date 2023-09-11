const obj7 = {
    a: {
        b: {
            c: 12,
            d: 'Hello World'
        },
        e: [1, 2, 3]
    }
};

function mapObject(obj: any, parentKey: string = '') {
    // срздаем массив ключей обьекта + редюсер
    return Object.keys(obj).reduce((acc, key: string) => {

        // перед созданием ключа проверяем хранятся там данные из рекурсии
        // если да - собираем ключ в кучу, нет - берем значение из массива 
        const newKey = parentKey ? `${parentKey}/${key}` : key;

        // проверяем значение свойства
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {

            // если обьект и не массив - сохраняем текущий аккум
            // рекурсивно вызываем следующий обьект и сохраняем текущий ключ 
            acc = { ...acc, ...mapObject(obj[key], newKey) };
        } else {

            // если не обьект - добавляем собранные ключи + значение 
            acc[newKey] = obj[key];
        }

        // возвращаем обьект-аккумулятор
        return acc;
    }, {});
}

const res7 = mapObject(obj7);
console.log(res7);

/* Outputs: {
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
} */
