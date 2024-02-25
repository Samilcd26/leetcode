

using LetC_.Public;


Solution.ReferenceEquals(new ListNode(1), new ListNode(1)); // false



public class Solution
{
    public static bool HasCycle(ListNode head)
    {

        if (head == null || head.next == null)
        {
            return false;
        }
        ListNode slow = head;
        ListNode fast = head.next;

        while (slow!= fast)
        {
            if (fast == null || fast.next == null)
            {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }


        return false;
    }
}