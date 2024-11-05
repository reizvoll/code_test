function solution(babbling) {
    const sayWords = ["aya", "ye", "woo", "ma"];
    let count = 0;

    babbling.forEach(word => {
        let isValid = true;
        let tempWord = word;

        for (const sayWord of sayWords) {
            const doubleSayWord = sayWord + sayWord;
            if (tempWord.includes(doubleSayWord)) {
                isValid = false;
                break;
            } else {
                tempWord = tempWord.split(sayWord).join(" ");
            }
        }

        if (isValid && tempWord.trim() === "") {
            count++;
        }
    });

    return count;
}