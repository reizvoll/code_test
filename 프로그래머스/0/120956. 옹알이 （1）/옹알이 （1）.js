function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    
    return babbling.filter(function(word) {
        let findWord = word;
        
        for (let i = 0; i < words.length; i++) {
            if (findWord.indexOf(words[i] + words[i]) !== -1) {
                return false;
            }
            findWord = findWord.split(words[i]).join(' ');
        }

        if (findWord === ' '.repeat(findWord.length)) {
            return true;
        } else {
            return false;
        }
    }).length;
}