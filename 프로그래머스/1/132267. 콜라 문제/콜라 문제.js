function solution(a, b, n) {
    let total = 0;

    while (n >= a) {
        const exchange = Math.floor(n / a) * b;
        const remaining = n % a;
        total += exchange;
        n = exchange + remaining;
    }

    return total;
}
