function NotificationException() { }
function ErrorException() { }

function primitiveMultiply(a: number, b: number) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException();
    } else {
        throw new NotificationException();
    }
}

function reliableMultiply(a: number, b: number) {

    // создаем блок трай-кетч для отлова потенциальных ошибок
    try {

        // вызываем мультиплай и если не ошибка - все норм
        return primitiveMultiply(a, b);
    } catch (error) {

        // если ошибка Нотифай - рекурсивно вызываем надежный мультиплай
        if (error instanceof NotificationException) {
            return reliableMultiply(a, b)
        } else {

            // если Еррор - выбрасываем ошибку без трай-кетч
            throw error;
        }
    }
}

console.log(reliableMultiply(8, 8));
