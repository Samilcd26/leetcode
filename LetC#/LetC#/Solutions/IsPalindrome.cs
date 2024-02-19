using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace LetC_.Solutions
{
    public class Solution
    {
        public static bool IsPalindrome(string s)
        {
            string result = Regex.Replace(s, @"[^a-zA-Z0-9]", "").ToLower();
            return result == new string(result.Reverse().ToArray());

        }
    }

    //Best solution
    /*
       char[] charArr = s.ToCharArray();
           for(int c = 0, j = s.Length - 1; c<j;)
           {
               if(!Char.IsLetterOrDigit(s[c]))
               {
                   c++;
                   continue;
               }


                if(!Char.IsLetterOrDigit(s[j]))
               {
                   j--;
                   continue;
               }
                if(Char.ToLower(s[c++]) != Char.ToLower(s[j--]))
                    return false;
           }
           return true;
     */
}
