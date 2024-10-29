function solution(x) {
    const str = String(x);
    const numArrays = str.split('');
    const eachNums = numArrays.map(Number);
    const Sum = eachNums.reduce((a, b) => a + b, 0);
    return x % Sum === 0;
}