/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let operatiors = ['+', '-', '*', '/'];

    const calculate = (a, b, op) => {
        if (op === '+') {
            return a + b;
        } else if (op === '-') {
            return a - b;
        } else if (op === '*') {
            return a * b;
        } else if (op === '/') {
            return Math.trunc(a / b);
        }
    }

    if (tokens.length === 1) {
        return tokens[0];
    }

    for (let i = 0; i < tokens.length; i++) {
        if (!operatiors.includes(tokens[i])) {
            stack.push(Number(tokens[i]));
        } else {
            sum = calculate(stack[stack.length - 2], stack[stack.length - 1], tokens[i]);
            const b = stack.pop();
            const a = stack.pop();
            stack.push(calculate(a, b, tokens[i]));
        }
    }

    return stack[0];
};