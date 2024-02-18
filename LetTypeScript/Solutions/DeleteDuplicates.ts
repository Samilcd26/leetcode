
import { ListNode } from '../Public/ListNode';
class DeleteDuplicates {
    static main(head: ListNode | null): ListNode | null {
  

        if (!head || !head.next) {
          return head;
        }
      
        let prev: ListNode = head;
        let curr: ListNode = head.next;
      
        while (curr) {
          if (curr.val !== prev.val) {
            prev = curr;
          } else {
            while (curr.next && curr.next.val === curr.val) {
              curr = curr.next;
            }
            prev.next = curr.next;
          }
          curr = curr.next!;
        }
      
        return head;
      
       
      };
}