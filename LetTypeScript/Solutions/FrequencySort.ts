class FrequencySort {
    static  main(s: string): string {
        var dic= new Map<String,number>();
        var output:string=""
        s.split("").forEach(x => {
          if (dic.get(x) === undefined) {
            dic.set(x, 1);
          } else {
            dic.set(x, dic.get(x)! + 1);
          }
        });
    
        const entries = Array.from(dic.entries());
        entries.sort((a, b) => b[1] - a[1]);
        const sortedMap = new Map(entries);
    
        sortedMap.forEach((value, key) => {
          for (let i = 0; i < value; i++) {
            output += key;
          }
       
        
    });
    
    return output
    }
}