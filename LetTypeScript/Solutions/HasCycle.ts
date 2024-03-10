import { ListNode } from "../Public/ListNode";

class HasCycle {
    static main(head: ListNode | null): boolean {

       if (!head || !head.next )return false;

       let slow:ListNode = head;
       let fast:ListNode = head;

       while (slow && fast) {
            if (slow===fast) return true;

            slow = fast;
            fast = fast.next!;
       }

       return false;
    };
}

//+> Best Solition
/*
function hasCycle(head: ListNode | null): boolean {
    if (head === null) return false
    let tortoise = head
    let hare = head

    while (true) {
        tortoise = tortoise?.next
        hare = hare?.next?.next
        if (!tortoise || !hare) return false

        if (hare === tortoise) return true
    }
};

function hasCycle(head: ListNode | null): boolean {
    let going = true;
    let cur = head
    if (cur) cur['visited'] = true;
    else return false
    while (going) {
        if(!cur.next) return false
        cur = cur.next;
        if (cur['visited']) return true
        cur['visited'] = true
    }

    return false;
};

*/