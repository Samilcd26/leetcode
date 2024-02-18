import { TreeNode } from '../Public/TreeNode';


class InorderTraversal {
    static main(root: TreeNode | null): number[] {
        const result: number[] = [];
        InorderTraversal.inorderHelper(root, result);
        return result;
      }
      
      static inorderHelper(node: TreeNode | null, result: number[]): void {
        if (node !== null) {
            InorderTraversal.inorderHelper(node.left, result);
            result.push(node.val);
            InorderTraversal.inorderHelper(node.right, result);
        }
      }
      
}

//Solution Two 

/*
var outList: number[] = [];
  var temp: number[] = [];


  if (root) {
    if (root.left && !root.right) {
      temp = inorderTraversal(root!.left)
      outList.push(...temp)
      outList.push(root.val)

    }

    if (root.right && !root.left) {
      temp = inorderTraversal(root!.right)
      outList.push(...temp)
      outList.push(root.val)
    }

    if (root.right && root.left) {
      temp = inorderTraversal(root!.left)
      outList.push(...temp)
      outList.push(root.val)
      temp = inorderTraversal(root!.right)
      outList.push(...temp)

      
    }
    if (!root.right&&!root.left) {
      outList.push(root.val)
    }

  }

  return outList;
*/