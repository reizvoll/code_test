function solution(numbers) {
    let totalSum = 0;
    let numbersSum = 0;

    for (let i = 0; i <= 9; i++) {
        totalSum += i;
    }

    for (let i = 0; i < numbers.length; i++) {
        numbersSum += numbers[i];
    }

    return totalSum - numbersSum;
}