/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const sAskiiArray = [];

    for (let i = 0; i < s.length; i++) {
        sAskiiArray.push(s[i].charCodeAt());
    }

    console.log(sAskiiArray);

    for (let i = 0; i < t.length; i++) {
        if (sAskiiArray.includes(t[i].charCodeAt())) {
            let spliceIdx = sAskiiArray.indexOf(t[i].charCodeAt());
            sAskiiArray.splice(spliceIdx, 1);
        }
    }

    if (sAskiiArray.length === 0) {
        return true;
    }

    return false;
};