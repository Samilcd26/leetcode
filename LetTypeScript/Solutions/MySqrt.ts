class MySqrt {
    static main(x: number): number {
   
        if (x === 0) {
            return 0;
          } else if (x === 1) {
            return 1;
          }
        
          
          let result = 1;
        
          
          while (result * result <= x) {
            result++;
          }
        
          
          return result - 1;
       
    };
}