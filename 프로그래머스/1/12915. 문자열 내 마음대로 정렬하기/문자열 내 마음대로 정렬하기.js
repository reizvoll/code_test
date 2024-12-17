function solution(strings, n) {
    return strings.sort((a, b) => {
        // 기준 : n번째 문자
        if (a[n] > b[n]) return 1; // a는 b보다 뒤에
        if (a[n] < b[n]) return -1; // a가 b보다 앞에
        
        // n번째 문자가 같으면 사전순으로
        if (a > b) return 1;
        if (a < b) return -1;
        return 0; // 같으면 변경X
    });
}