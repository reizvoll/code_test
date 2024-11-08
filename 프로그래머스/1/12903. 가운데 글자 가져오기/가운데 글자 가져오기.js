function solution(s) {
    const length = s.length;
    const a = s[Math.floor(length / 2)];
    const b = s[length / 2 - 1];

    return length % 2 === 1 ? a : b + a;
}