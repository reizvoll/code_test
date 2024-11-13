function solution(left, right) {
    let sum = 0;

    for (let i = left; i <= right; i++) {
        let Count = 0;

        for (let k = 1; k <= i; k++) {
            if (i % k === 0) {
                Count++;
            }
        }

        if (Count % 2 === 0) {
            sum += i;
        } else {
            sum -= i;
        }
    }

    return sum;
}