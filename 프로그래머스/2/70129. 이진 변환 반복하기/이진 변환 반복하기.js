function solution(s) {
    let changeNum = 0;
    let count = 0;
    
     while (s !== "1") {
        changeNum++
        
        let oneLeft = "";
        for (let i = 0; i < s.length; i++) {
            if (s[i] === "1") {
                oneLeft += "1";
            } else {
                count++;
            }
        }
        s = oneLeft.length.toString(2);
    }
    return [changeNum, count];
}