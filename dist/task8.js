"use strict";
const num = 10;
function combos(num) {
    const results = [];
    const stack = [[num, []]];
    while (stack.length > 0) {
        const [remaining, currentCombo] = stack.pop();
        if (remaining === 0) {
            results.push(currentCombo);
        }
        else {
            let i = currentCombo.length > 0 ? currentCombo[currentCombo.length - 1] : 1;
            for (; i <= remaining; i++) {
                stack.push([remaining - i, [...currentCombo, i]]);
            }
        }
    }
    return results;
}
const res8 = combos(num);
console.log(res8);
