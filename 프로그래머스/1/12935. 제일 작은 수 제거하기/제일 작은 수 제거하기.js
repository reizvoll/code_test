function solution(arr) {

    let min = arr[0];
    let index = 0;
    const result = [];

    
    if (arr.length === 1) {
        return [-1];
    }

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== min) {
            result[index] = arr[i];
            index++;
        }
    }

    return result;
}