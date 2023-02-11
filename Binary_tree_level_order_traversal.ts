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

function levelOrder(root: TreeNode | null): number[][] {

    if(root == null)
        return []
    let q=[]
    let res = []

    q.push(root)
    // console.log("start")



    while(q.length>0){
        let len = q.length
        let cur = []
        // console.log('q',q)
        while(len>0){
            
            let ele = q.shift()
            // console.log('ele',ele)
            cur.push(ele.val)
            if(ele.left){
                q.push(ele.left)
                // console.log('insert left',ele.left)
            }
                
            if(ele.right){
                q.push(ele.right)
                // console.log('insert right',ele.right)
            }
                
            
            len--;
            // console.log('cur',cur)
        }
        res.push(cur)
        // console.log('res',res)
        // if(q.length==0)
        //     return res;
    }

    return res

};
