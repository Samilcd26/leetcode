export class TreeNode {
    static readonly NULL_NODE: TreeNode = new TreeNode();
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }


    static toBinaryTree(list: (number | null)[]): TreeNode | null {
        if (list.length === 0) {
          return null;
        }
    
        const root = new TreeNode(list[0]!);
        const queue: TreeNode[] = [root];
    
        for (let i = 1; i < list.length; i += 2) {
          const parent = queue.shift();
    
          if (list[i] !== null) {
            parent!.left = new TreeNode(list[i]!);
            queue.push(parent!.left);
          } else {
            parent!.left = TreeNode.NULL_NODE;
          }
    
          if (i + 1 < list.length && list[i + 1] !== null) {
            parent!.right = new TreeNode(list[i + 1]!);
            queue.push(parent!.right);
          } else {
            parent!.right = TreeNode.NULL_NODE;
          }
        }
    
        return root;
      }
}