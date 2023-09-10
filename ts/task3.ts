// обьявляем тип функции которая принимает массив любых аргументов
// и ниче не возвращает
type TFunc = (...args: any[]) => void;

// основная функция которая примет массив функций + аргументы и вернет промис резульатов
function bulkRun(funcs: Array<[TFunc, any[]]>) {

    // асинхронное выполнение массива функций и возврат промисов
    // которые разрешатся, когда функции выполнятся
    return Promise.all(funcs.map(([func, args]) =>

        // каждая функция обернута в промис и последним аргументом принимает resolve
        new Promise((resolve) => func(...args, resolve))
    ));
}

const f1: TFunc = (cb) => {
    cb(1);
}

const f2: TFunc = (a, cb) => {
    cb(a);
};

const f3: TFunc = (a, b, cb) => {
    setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
    [f1, []],
    [f2, [2]],
    [f3, [3, 4]]
]).then((results) => {
    console.log(results);
    // Output: [1, 2, [3, 4]]
});
