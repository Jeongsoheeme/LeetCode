/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let centerIdx = Math.round(nums.length / 2);
    
    if (target >= nums[centerIdx]) {
        for (let i = centerIdx; i < nums.length; i++) {
            if (nums[i] === target) {
                return i;
            }
        }
    } else {
        for (let i = 0; i < centerIdx; i++) {
            if (nums[i] === target) {
                return i;
            }
        }
    }

    return -1;
};