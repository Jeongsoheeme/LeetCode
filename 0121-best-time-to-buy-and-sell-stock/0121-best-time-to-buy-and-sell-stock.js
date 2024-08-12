/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let minimum = Infinity;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minimum) {
            minimum = prices[i];
        } else {
            if ((prices[i] - minimum) > maxProfit) {
                maxProfit = prices[i] - minimum;
            }
        }
    }

    return maxProfit;
};