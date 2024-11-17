function solution(price, money, count) {
    let total = 0;

    for (let i = 1; i <= count; i++) {
        total += price * i;
    }

    const changes = total - money;

    return changes > 0 ? changes : 0;
}