import { ListNode } from "../Public/ListNode";
class MergeTwoLists {
    static  main(list1: ListNode | null, list2: ListNode | null): ListNode | null {
        const outList = new ListNode(0);
        let curr = outList;
      
        while (list1 && list2) {
          if (list1.val <= list2.val) {
            curr.next = list1;
            list1 = list1.next;
          } else {
            curr.next = list2;
            list2 = list2.next;
          }
          curr = curr.next!;
        }
      
        curr.next = list1 || list2;
      
        return outList.next;
       
    }
}