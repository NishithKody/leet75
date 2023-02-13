/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {



    let util = (node, minVal, maxVal) =>{
        if(!node)
            return true;

        if(node.val <minVal || node.val>maxVal){
            return false;
        }

        let left = util(node.left, minVal, node.val-1)
        let right = util(node.right, node.val +1 , maxVal)
        

        return (left && right)

        
    }

    return util(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY)
};
