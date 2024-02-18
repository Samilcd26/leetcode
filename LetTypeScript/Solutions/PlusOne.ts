class PlusOne {
    static  main(digits: number[]): number[] {
        var kal=1;
        
        if (digits.every(x=>x===9)) {
          digits.fill(0,0,digits.length+1).unshift(1)
        }else{
          for (let index = digits.length-1; 0 <= index; index--) {
          
            if (digits[index]===9) {
              digits[index]+=kal
              
              if (digits[index]%10===0) {
                digits[index]=0
                kal=1
              }   
                   
            }else{
              digits[index]+=kal
              kal=0
            }
            
            if (kal===1&& index===0) {
              digits.unshift(1)
            }
          
        }
        }
      
        
       
        return digits;
      };
}