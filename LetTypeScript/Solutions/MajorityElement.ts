class MajorityElement {
    static majorityElement(nums: number[]): number {
        var temp: Map<number, number> = new Map<number, number>();
        var output: number = 0;
    
        nums.forEach(x => {
            if (temp.get(x) === undefined) {
                temp.set(x, 1);
            } else {
                temp.set(x, temp.get(x)! + 1);
            }
        });
    
        let maxValue: number = Number.MIN_VALUE;
    
        temp.forEach((value: number, key: number) => {
    
            if (value > maxValue) {
                maxValue = value;
                output=key
            }
        });
    
        return output;
    };
}

//? Best Solition
/*
 let candidate = null;
    let count = 0;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1
    }
    return candidate;

*/