function solution(phone_number) {
    const numLength = phone_number.length;
    const hiddenNum = numLength - 4;
    
    let hidden = ""
    for (let i=0; i<hiddenNum; i++) {
        hidden += "*";
    }
    
    const seeParts = phone_number.slice(-4);
    return hidden + seeParts;
}