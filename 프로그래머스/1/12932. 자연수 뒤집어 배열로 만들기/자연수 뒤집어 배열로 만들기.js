function solution(n) {
 let str = String(n);
 let result = [];
    
 for (let i = str.length -1; i >= 0; i--) {
    result[result.length] = +str[i];
 }
 return result;
}
