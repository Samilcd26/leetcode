using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LetC_.Public
{
    public class ListNode
    {
     public int val;
      public ListNode next;
      public ListNode(int x)
        {
            val = x;
            next = null;
                 }
  }
    /*
    public static ListNode ToList(int[] arr)
    {
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        for (int i = 1; i < arr.Length; i++)
        {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }

        return head;
    }
    */
}
