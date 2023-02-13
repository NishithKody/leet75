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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {

    let util =(node) =>{


        if(p.val>node.val && q.val>node.val){
            return util(node.right)
        }
        else if(p.val<node.val && q.val<node.val){
            return util(node.left)

        }
        else{
            return node
        }
    }

    return util(root)
	
};
