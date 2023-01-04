/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {

    let fst = head;
    let slw = head;

    while(fst.next!=null){
       if(fst.next.next==null){
           slw=slw.next;
           break;
           
       }
        fst = fst.next.next;
        slw = slw.next; 
       
        
    }

    return slw;

};
