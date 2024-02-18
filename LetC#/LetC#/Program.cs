
Solution test = new();


Console.WriteLine(test.Generate(5));

public class PascalTriangle
{
    public IList<IList<int>> Generate(int numRows)
    {
        var outList = new List<IList<int>>();
       
        outList.Add(new List<int> { 0,1,0 });
       
        for (int i = 0; i < numRows-1; i++)
        {
            var tempList = new List<int>();
            
            for (global::System.Int32 j = 0; j < outList[i].Count-1; j++)
            {
                
                tempList.Add(outList[i][j] + outList[i][j + 1]);

                
            }
            tempList.Insert(0, 0);
            tempList.Add(0);
            outList.Add(tempList);
        }

        for (int a = 0; a < outList.Count; a++)
        {
            outList[a].RemoveAt(0);
            outList[a].RemoveAt(outList[a].Count - 1);


        }


      

        return outList;
    }
}



