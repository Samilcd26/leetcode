export class Merge {
    static main(nums1: number[], m: number, nums2: number[], n: number): void {

        let p1: number = m - 1;//5
        let p2: number = n - 1;//2
        let p: number = m + n - 1;//6

        while (p1 >= 0 && p2 >= 0) {
            if (nums1[p1] > nums2[p2]) {
                nums1[p] = nums1[p1];
                p1--;
            } else {
                nums1[p] = nums2[p2];
                p2--;
            }
            p--;
        }

        while (p2 >= 0) {
            nums1[p] = nums2[p2];
            p--;
            p2--;
        }

        console.log('====================================');
        console.log(nums1);
        console.log('====================================');
    };
}