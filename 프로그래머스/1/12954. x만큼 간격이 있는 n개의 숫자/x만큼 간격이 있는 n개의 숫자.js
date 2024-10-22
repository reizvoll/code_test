function solution(x, n) {
    let sol = new Array(n);
    for (let i = 0; i < n; i++) {
        sol[i] = x * (i + 1);
    }
    return sol;
}