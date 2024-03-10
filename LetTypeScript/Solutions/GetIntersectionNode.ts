import { ListNode } from "../Public/ListNode";

class GetIntersectionNode {
    static main(headA: ListNode | null, headB: ListNode | null): ListNode | null {


        if (!headA || !headB) return null;
    
        let a = headA;
        let b = headB;
    
        while (a !== b) {
            a = a === null ? headB : a.next!;
            b = b === null ? headA : b.next!;
        }
    
        return a;
    
    };
}