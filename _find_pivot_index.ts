function pivotIndex(nums: number[]): number {

   let rsum=0;
   let res = -1;
   let lsum=0;

   for(let i of nums){
        rsum=rsum + i;
   }

   rsum = rsum - nums[0];
        

    if(lsum == rsum){
        return 0;
    }

    console.log('rsum',rsum)

    for(let i =1;i<=nums.length -1 ;i++ ){
        console.log(lsum)
        lsum = lsum + nums[i-1];
        rsum = rsum - nums[i];

        if(lsum == rsum){
            res =i;
            break;
        }
    }

    // lsum= lsum+nums[nums.length-1]

    // if(lsum == 0){
    //     return nums.length-1
    // }
    

    return res;



};



//------------------------------------ attempt 2 (better runtime)
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {

    let res = []
    if(!root){
        return res
    }

    let util= (node) =>{
        if(!node){
            return
        }

        util(node.left)
        res.push(node.val)
        util(node.right)
    }

    util(root)

    return res;
    
};
