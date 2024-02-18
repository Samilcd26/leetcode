import { TreeNode } from "../Public/TreeNode";

class SortedArrayToBST {
    static sortedArrayToBST(nums: number[]): TreeNode | null {
    
        var mid:number =Math.floor(nums.length/2);
      
        var root = new TreeNode(nums[mid]);
        if(nums.length == 1){
            return root;
        }
        if(nums.length == 0){
            return null;
        }
    
        root.left = this.sortedArrayToBST(nums.slice(0,mid));
        root.right = this.sortedArrayToBST(nums.slice(mid+1,nums.length));
    
        return root;
    };
}