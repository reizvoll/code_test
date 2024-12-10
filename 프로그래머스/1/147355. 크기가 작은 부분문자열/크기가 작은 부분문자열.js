function solution(t, p) {
    const pToNum = parseInt(p, 10);
    const pLength = p.length;
    let count = 0;

    for (let i = 0; i <= t.length - pLength; i++) {
        const String = t.slice(i, i + pLength);
        const subToNum = parseInt(String, 10);
        if (subToNum <= pToNum) {
            count++;
        }
    }

    return count;
}