function solution(s) {
    let result = "";
    let wordIndex = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char === " ") { 
            result += char;
            wordIndex = 0;
        } else {
            if (wordIndex % 2 === 0) {
                result += char.toUpperCase();
            } else {
                result += char.toLowerCase();
            }
            wordIndex++;
        }
    }

    return result;
}