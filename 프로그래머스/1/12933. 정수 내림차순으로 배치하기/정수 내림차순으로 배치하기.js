function solution(n) {
    const str = String(n);
    const numArrays = str.split('');
    const sortNum = numArrays.sort((a, b) => b - a);
    
    let result = '';
    for (let i = 0; i < sortNum.length; i++) {
        result += sortNum[i];
    }
    return Number(result);
}