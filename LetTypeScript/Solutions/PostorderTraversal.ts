import { TreeNode } from "../Public/TreeNode";

class PostorderTraversal {
    static postorderTraversal(root: TreeNode | null): number[] {
        if(root === null) return [];
        var res:number[] = [];
        this.postorderTraversal(root.left).map((val) => res.push(val));
        this.postorderTraversal(root.right).map((val) => res.push(val));
        res.push(root.val);
        return res;
    };
}