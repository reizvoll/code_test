function solution(s) {
    if (s.length === 4 || s.length === 6) {
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (char < '0' || char > '9') {
                return false;
            }
        }
        return true;
    }
    return false;
}