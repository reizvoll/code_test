function solution(food) {
    let result = "";

    // 1번 음식 ~  먹을 수 있는 음식만큼 추가
    for (let i = 1; i < food.length; i++) {
        const count = Math.floor(food[i] / 2); // 음식 절반만 배치
        result += i.toString().repeat(count); // 문자열에 추가
    }

    // 최종 : 왼쪽 음식 + 물 + 오른쪽 음식
    return result + "0" + result.split("").reverse().join("");
}