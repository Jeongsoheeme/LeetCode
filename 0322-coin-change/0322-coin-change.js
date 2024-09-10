/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let coinSumArr = new Array(amount + 1).fill(Infinity);
    coinSumArr[0] = 0;

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            coinSumArr[i] = Math.min(coinSumArr[i], coinSumArr[i - coin] + 1)
        }
    }

    return coinSumArr[amount] === Infinity ? -1 : coinSumArr[amount];
};