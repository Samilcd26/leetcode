function intersection(nums1: number[], nums2: number[]): number[] {

    if (nums1.length > nums2.length) {
        return intersection(nums2, nums1)
    }
    var temp: number[] = []
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i]) && !temp.includes(nums1[i])) {
            temp.push(nums1[i])
        }
    }
    return temp;

}


intersection([1, 2, 2, 1], [2, 2])