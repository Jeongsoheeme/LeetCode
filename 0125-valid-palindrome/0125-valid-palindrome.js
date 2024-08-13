/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const ascii = [];

    for (let i = 0; i < s.length; i++) {
        let code = s[i].charCodeAt();
        if (96 < code && code < 123) {
            ascii.push(code - 32);
        } else if ((64 < code && code < 91) || (47 < code && code < 58)) {
            ascii.push(code);
        }
    }

    const reverseAscii = [...ascii].reverse();

    if (ascii.toString() === reverseAscii.toString()) {
        return true;
    }

    return false;
};