import { TreeNode } from "../Public/TreeNode";

class PreorderTraversal {
    static preorderTraversal(root: TreeNode | null): number[] {
        if(root === null) return [];
        var res:number[] = [];
        res.push(root.val);
        this.preorderTraversal(root.left).map((val) => res.push(val));
        this.preorderTraversal(root.right).map((val) => res.push(val));;
        return res;
        
    };
}