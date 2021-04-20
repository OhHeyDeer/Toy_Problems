/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */




// Find the minimum absolute difference (MAD) between ANY two nodes
// Return this MAD

const getMinimumDifference = (root) => {

    // Define a holding value for the minimum absolute difference
    let minimum = 10000000;

    // Define a holding variable for the previous node value
    // Set this as the first node value




    const recursivelySearch = (node, min) => {
        // Base Case
        if (node.left === null && node.right === null) {
            return min;
        }
        // Find the absolute difference between the current and the previous node values
        
        // Check if this AD is smaller than the currently held minimum
    
        // Change current and previous nodes
        let currentVal = node.val;

        if (node.left !== null) {
            let difference1 = Math.abs(currentVal - node.left.val);
            if (difference1 < min) {
                return recursivelySearch(node.left, difference1);
            } else {
                return recursivelySearch(node.left, min);
            }

        }

        if (node.right !== null) {
            let difference2 = Math.abs(currentVal - node.right.val);
            if (difference2 < min) {
                return recursivelySearch(node.right, difference2);
            } else {
                return recursivelySearch(node.right, min);
            }
        }

    }

    return recursivelySearch(root, minimum);

};

// BST Node Definition
function TreeNode (val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}
const tree1 = new TreeNode(1, undefined, new TreeNode(3, new TreeNode(2, undefined, undefined), undefined)); // Create a basic BST

// const tree2 = TreeNode(1, 2, 3);
// console.log(tree2.val);


// Test Cases
console.log(getMinimumDifference(tree1));