function solution(k, m, score) {
    let total = 0;

    score.sort((a, b) => b - a);

    for (let i = 0; i < score.length; i += m) {
        // 상자는 m개로 차야 판매가 가능하다!
        if (i + m <= score.length) {
            const box = score.slice(i, i + m); // m개 단위로 자르기
            const minScore = box[m - 1]; // 최저점수
            total += minScore * m; // 가격추가
        }
    }

    return total;
}
