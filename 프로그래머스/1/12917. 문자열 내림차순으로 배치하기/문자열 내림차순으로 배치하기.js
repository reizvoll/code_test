function solution(s) {

    const Array = s.split('');

    Array.sort((a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    });

    let result = '';
    for (let i = 0; i < Array.length; i++) {
        result += Array[i];
    }

    return result;
}