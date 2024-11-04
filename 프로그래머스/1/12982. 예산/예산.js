function solution(d, budget) {
    // 요청 금액 적은 순으로 정렬 (sort)
    // 더하면서 초과되지 않을 때 까지
    // 초과되면 그 전까지의 부서 수 반환

    d.sort((a,b) => a - b);
    let submit = 0;
    let all = 0;
    
    for (let i =0; i < d.length; i++) {
        all += d[i];
        if (all > budget){
            break;
        }
        submit++;
    }
    return submit;
}