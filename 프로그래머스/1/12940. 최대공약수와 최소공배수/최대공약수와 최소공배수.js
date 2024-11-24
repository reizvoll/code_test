function solution(a, b) {
    let gcd = 1;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }

    let lcm = a * b;
    for (let i = Math.max(a, b); i <= a * b; i++) {
        if (i % a === 0 && i % b === 0) {
            lcm = i;
            break;
        }
    }

    return [gcd, lcm];
}