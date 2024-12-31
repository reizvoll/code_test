function solution(topping) {
    let ans = 0;
    const cake = new Set();
    const slicedcake = new Map();

    // 모든 토핑을 우선 잘린 곳에 넣어주기
    for (let t of topping) {
        slicedcake.set(t, (slicedcake.get(t) || 0) + 1);
    }

    // 롤케이크 자르기
    for (let i = 0; i < topping.length - 1; i++) {
        const t = topping[i];

        // 케이크에 토핑은 추가
        cake.add(t);

        // 잘려진 조각에서 토핑 제거
        if (slicedcake.get(t) === 1) {
            slicedcake.delete(t);
        } else {
            slicedcake.set(t, slicedcake.get(t) - 1);
        }

        // 양쪽이 같을 때
        if (cake.size === slicedcake.size) {
            ans++;
        }
    }

    return ans;
}