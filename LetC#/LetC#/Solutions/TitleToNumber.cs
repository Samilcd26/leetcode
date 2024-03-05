using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LetC_.Solutions3
{
    public class Solution
    {
        public static int TitleToNumber(string columnTitle)
        {

            int result = 0;
            for (int i = 0; i < columnTitle.Length; i++)
            {
                result = result * 26 + (columnTitle[i] - 'A' + 1);
            }

            return result;

        }
    }
}
