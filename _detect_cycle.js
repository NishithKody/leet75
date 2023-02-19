/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    let slw = head;
    let fst = head;
    while(fst && fst.next){
        slw=slw.next
        fst=fst.next.next

        if(slw==fst){
            let inter = head
            while(inter!=slw){
                slw=slw.next
                inter=inter.next
            }
            return inter
        }
    }

    return null
    
    
};
