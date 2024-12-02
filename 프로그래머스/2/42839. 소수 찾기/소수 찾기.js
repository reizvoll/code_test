function solution(numbers) {
    const allNums = [];
    const digits = numbers.split("");
    const length = digits.length;

    for (let i = 1; i <= length; i++) {
        const queue = [[[], digits]];
        while (queue.length > 0) {
            const [current, remaining] = queue.shift();
            if (current.length === i) {
                const num = parseInt(current.join(""), 10);
                if (!allNums.includes(num)) allNums.push(num);
            } else {
                for (let j = 0; j < remaining.length; j++) {
                    const next = [...current, remaining[j]];
                    const rest = [...remaining.slice(0, j), ...remaining.slice(j + 1)];
                    queue.push([next, rest]);
                }
            }
        }
    }

    let primeCount = 0;
    for (let i = 0; i < allNums.length; i++) {
        const num = allNums[i];
        if (num < 2) continue;
        
    let isPrime = true;
    for (let j = 2; j <= num / 2; j++) {
        if (num % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) primeCount++; 
    }
    return primeCount;
}