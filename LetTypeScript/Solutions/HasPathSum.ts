import { TreeNode } from "../Public/TreeNode"

class HasPathSum {
    static main(root: TreeNode | null, targetSum: number): boolean {
        if(!root) return false
       
        targetSum-=root.val
        
        if (targetSum === 0 && !root.left && !root.right) return true
    
        return this.main(root.left,targetSum) || this.main(root.right,targetSum)
    };
}