import { ListNode } from "../Public/ListNode";

class RemoveElements {
    static main(head: ListNode | null, val: number): ListNode | null {
        let prev: ListNode | null = null;
        let curr = head;
        while (curr !== null) {
          if (curr.val !== val) {
            prev = curr;
            curr = curr.next;
            continue;
          }
      
          if (prev !== null) {
            curr = prev.next = curr.next;
          } else {
            curr = head = curr.next;
          }
        }
      
        return head;
    };
}

/*
let prev: ListNode | null = null;
  let curr = head;
  while (curr !== null) {
    if (curr.val !== val) {
      prev = curr;
      curr = curr.next;
      continue;
    }

    if (prev !== null) {
      curr = prev.next = curr.next;
    } else {
      curr = head = curr.next;
    }
  }

  return head;
*/