function solution(keymap, targets) {
    const minPress = new Map();

    keymap.forEach((keys, index) => {
        for (let i = 0; i < keys.length; i++) {
            const char = keys[i];
            const pressCount = i + 1;

            if (!minPress.has(char) || pressCount < minPress.get(char)) {
                minPress.set(char, pressCount);
            }
        }
    });

    const result = targets.map((target) => {
        let pressSum = 0;

        for (let char of target) {
            if (!minPress.has(char)) {
                return -1;
            }
            pressSum += minPress.get(char);
        }
        return pressSum;
    });

    return result;
}