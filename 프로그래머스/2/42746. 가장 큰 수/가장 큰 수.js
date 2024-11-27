function solution(numbers) {
  const sort = numbers
    .map(String)
    .sort((a, b) => (b + a) - (a + b));
  
  const result = sort.join('');
  
  return result[0] === '0' ? '0' : result;
}