using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LetC_.Solutions2
{
    public class Solution
    {
        public static int SingleNumber(int[] nums)
        {

            Console.WriteLine(5 ^ 9);
            return nums.Select(x => x).GroupBy(x => x).Where(x => x.Count() == 1).Select(x => x.Key).First();
            ;

        }
    }
}



//Solution 2
/*
 * int result = 0;
        for (int i = 0; i < nums.Length; i++)
        {
            result ^= nums[i];
        }
        return result;
*/