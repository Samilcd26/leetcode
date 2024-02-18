import { TreeNode } from "../Public/TreeNode";
//! Not my solve
class MinDepth {
    static minDepth(root: TreeNode | null): number {
        if (root === null) {
            return 0;
        }
    
        if(root.left ==null){
            return Math.min(Number.MAX_SAFE_INTEGER,this.minDepth(root.right)+1);
    
        }else if(root.right ==null){
            return Math.min(Number.MAX_SAFE_INTEGER,this.minDepth(root.left)+1);
        }else{
            return Math.min(this.minDepth(root.left),this.minDepth(root.right))+1
        }
    };
}