function solution(n, left, right) {
    const result = [];

    // 왼 -> 오 값 계산
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n); // 2차원 배열에서 i 속하는 행 번호 계산
        const col = i % n; // 2차원 배열에서 i 속하는 열 번호
        // (행, 열)의 값은 '행 번호와 열 번호 중 큰 값 + 1'로 계산
        result.push(Math.max(row, col) + 1); 
    }

    return result;
}