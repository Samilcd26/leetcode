using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LetC_.Solutions1
{
    public class Solution
    {
        public static int MaxProfit(int[] prices)
        {
            int min_price = prices[0], max_profit = 0;

            foreach (var item in prices)
            {
                min_price = int.Min(min_price, item);
                max_profit = int.Max(max_profit, item - min_price);
            }

            return max_profit;
        }
    }
}


//Best way
/*
  int bDay=prices[0],sDay=0,max=0;
        for(int i=1;i<prices.Length;i++){
            if(bDay > prices[i]){
                bDay = prices[i];
            }
            else if((prices[i]-bDay) > max){
                max = prices[i]-bDay;
                }
        }
        return max;
 
 
 */