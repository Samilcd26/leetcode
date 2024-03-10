class Intersection {
    static main(nums1: number[], nums2: number[]): number[] {

        if (nums1.length > nums2.length) {
            return this.main(nums2, nums1)
        }
        var temp: number[] = []
        for (let i = 0; i < nums1.length; i++) {
            if (nums2.includes(nums1[i])  && !temp.includes(nums1[i])) {
                temp.push(nums1[i])
            }
        }
        return temp;
    
    }
}

/*
const s1 = new Set(nums1);
    const res = new Set<number>();
    for(let num of nums2){
        if(s1.has(num)) res.add(num);
    }
    return [...res];
*/