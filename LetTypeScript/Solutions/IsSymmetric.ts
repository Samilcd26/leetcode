import { TreeNode } from "../Public/TreeNode";

class IsSymmetric {
    static main(root: TreeNode | null): boolean {
        if (!root) {
            return true;
        }
        
        return IsSymmetric.isMirror(root.left, root.right);
    }
    
    static isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
        if (!left && !right) {
            return true;
        }
        if (!left || !right || left.val !== right.val) {
            return false;
        }
        
        return IsSymmetric.isMirror(left.left, right.right) && IsSymmetric.isMirror(left.right, right.left);
    }
}


/**
 *  Better but letcode rejected because this face a problem
function isSymmetric(root: TreeNode | null): boolean {
    var mapLeft = new Map<Number, Array<Number>>();
    var mapRight = new Map<Number, Array<Number>>();


    helper(root?.left ?? null, 0, mapLeft);
    helper(root?.right ?? null, 0, mapRight);

    for (const [key, tempP] of mapLeft) {
        var tempQ: Array<Number> = mapRight.get(key) ?? []
        tempP.reverse();
        if (JSON.stringify(tempP) !== JSON.stringify(tempQ)) return false;

    }
    return true;


};

function helper(root: TreeNode | null, s: number | 0, temp: Map<Number, Array<Number>>) {



    if (!root) {
        var tList = temp.get(s);
        tList === undefined ? tList = [-1] : tList.push(-1);
        temp.set(s, tList);

        return
    };

    s++;
    helper(root.left, s, temp);

    var tList = temp.get(s);
    tList === undefined ? tList = [root.val] : tList.push(root.val);
    temp.set(s, tList);


    helper(root.right, s, temp);

}

 * 
 * 
 */