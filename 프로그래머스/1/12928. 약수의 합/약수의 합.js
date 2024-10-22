function solution(n, i = 1, k = 0) {
    if (i > n) {
        return k;
    }
    if (n % i === 0) {
        k += i;
    }
    return solution (n, i+1, k);
}