using static System.Net.Mime.MediaTypeNames;
using System.Text.RegularExpressions;

Solution.IsPalindrome("`l;`` 1o1 ??;l`");


public class Solution
{
    public static bool IsPalindrome(string s)
    {
        //j is last eleman from list
        char[] charArr = s.ToCharArray();
        for (int c = 0, j = s.Length - 1; c < j;)
        {
            if (!Char.IsLetterOrDigit(s[c]))
            {
                c++;
                continue;
            }


            if (!Char.IsLetterOrDigit(s[j]))
            {
                j--;
                continue;
            }
            if (Char.ToLower(s[c++]) != Char.ToLower(s[j--]))
                return false;
        }
        return true;
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