const num = 10;

function combos(num: number): number[][] {
    // создаем пустые массивы 1. для результата уникальных массивов
    // 2. для набора уникальных чисел
    const results: number[][] = [];
    const stack: [number, number[]][] = [[num, []]];

    // цикл для создания уникальных чисел
    while (stack.length > 0) {

        // достаем из стака текущее число и массив
        const [remaining, currentCombo] = stack.pop() as [number, number[]];

        // если текущее число равно 0 - пушим массив уникальных чисел в результат
        if (remaining === 0) {
            results.push(currentCombo);
        } else {

            // создаем итератор - чтобы учитывать числа, большие или равные последнему числу,
            // использованному в текущей комбинации, что бы не создать повторяющиеся комбинации, в которых порядок чисел меняется
            let i = currentCombo.length > 0 ? currentCombo[currentCombo.length - 1] : 1
            for (; i <= remaining; i++) {

                // создаем новую комбинацию, расширяя currentCombo (который содержит ранее выбранные числа) и добавляя к нему i
                // [...currentCombo, i] - новавя комбинация с добавленным к ней i
                stack.push([remaining - i, [...currentCombo, i]]);
            }
        }
    }

    return results;
}

const res8 = combos(num);

console.log(res8);
