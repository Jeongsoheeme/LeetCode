/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const openBracket=['(','{','['];
    const cloesBracket=[')','}',']'];
    let stack = [];
  
    for (let i = 0; i < s.length; i++) {
      if (openBracket.includes(s[i])) {
        stack.push(s[i]);
      } else if (cloesBracket.includes(s[i])){
        if (stack.length === 0) {
            return false;
            }

        if (openBracket.indexOf(stack[stack.length - 1]) === cloesBracket.indexOf(s[i]) && openBracket.includes(stack[stack.length - 1])){
                stack.pop();
            } else {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }
    return true;
};