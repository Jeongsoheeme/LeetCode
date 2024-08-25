/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isBalance = true;

    const maxDepth = function (node) {
        if (!node) return 0;

        let leftNode = maxDepth(node.left);
        let rightNode = maxDepth(node.right);
        if (Math.abs(leftNode - rightNode) > 1) {
            isBalance = false;
        }

        return Math.max(leftNode, rightNode) + 1;
    }

    maxDepth(root);

    return isBalance;
};