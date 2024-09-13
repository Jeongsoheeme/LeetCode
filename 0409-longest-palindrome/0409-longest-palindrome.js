/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) {
        return s.length;
    }

    let sArr = Array.from(s); 
    let resultArr = [];

    for (let i = sArr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (sArr[i] === sArr[j]) {
                resultArr.push(sArr[i], sArr[j]);
                sArr.splice(i, 1);
                sArr.splice(j, 1);
                break;
            }
        }
    }

    if (sArr.length > 0) {
        return resultArr.length + 1;
    } else {
        return resultArr.length;
    }
};