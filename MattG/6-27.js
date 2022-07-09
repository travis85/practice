/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//helper function thats recursive (node, neworder(appends to this))
//conditionally call itself to left side then append val then conditionally call itself to rigth then append
//return result at end
//when can i stop recuring (base case)
//if root null return 
//only binary tree which means left and right
var inorderTraversal = function(root) {
    let resultArray = []

    function helper(root, resultArray) {
        if (root !== null) {
            helper(root.right, resultArray);
            helper(root.left, resultArray);
            resultArray.push(root.val);
           
            
            
        }
    } 
    helper(root, resultArray);
    
    return resultArray;
    
};
console.log(inorderTraversal([1,null,2,3]))//[1,3,2]