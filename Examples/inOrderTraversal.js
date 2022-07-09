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
