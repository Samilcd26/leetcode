class ConvertToTitle {
    static main(columnNumber: number): string {

        let res:string=""
    
        while (columnNumber > 0) {
            let remainder = columnNumber % 26;
            if (remainder === 0) {
                remainder = 26;
                columnNumber -= 1;
            }
            res += String.fromCharCode('A'.charCodeAt(0) + remainder - 1) 
            columnNumber = Math.floor(columnNumber / 26);
        }
        return res;
      
    };
}