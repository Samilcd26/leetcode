
Console.WriteLine(Solution.IsHappy(7));


 class Solution
{
    public static bool IsHappy(int n)
    {
        
        
        List<int> basamaklar = new List<int>();
        if (n>9)
        {
            while (n > 0)
            {
                int basamak = n % 10;
                basamaklar.Add(basamak);
                n /= 10;
            }
            basamaklar.Reverse();
        }


        int temp = 0;
        foreach (int item in basamaklar)
        {
            temp = item * item+temp;
        }
        

        if (temp == 1) return basamaklar[0] == 1;

        if (4 >= temp) return false;
        else return IsHappy(temp);

    }
}