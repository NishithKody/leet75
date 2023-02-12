/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {

    let res = []
    let util = (node)=>{
        if(!node){
            return
        }

        // console.log(node)
        res.push(node.val)
        for(let cur of node.children){
            util(cur)
        }
    }
    util(root)
    return res;

};
