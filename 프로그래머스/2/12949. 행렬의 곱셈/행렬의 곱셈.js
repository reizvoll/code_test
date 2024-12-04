function solution(arr1, arr2) {
    const rows1 = arr1.length; // arr1 행 길이
    const cols1 = arr1[0].length; // arr1 열 길이
    const cols2 = arr2[0].length; // arr2 열 길이

    // 결과 초기화
    const result = Array(rows1)
        .fill(0)
        .map(() => Array(cols2).fill(0));

    // 곱셈 계산
    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) {
                result[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return result;
}