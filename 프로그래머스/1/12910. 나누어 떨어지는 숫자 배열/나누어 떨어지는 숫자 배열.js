function solution(arr, divisor) {
    var answer = [];
    answer = arr.filter((a,b) => {
        if(a % divisor === 0) {
            return a
        }
    });
    return answer = answer.length === 0 ? [-1] : answer.sort(function(a,b) {return a-b});

}