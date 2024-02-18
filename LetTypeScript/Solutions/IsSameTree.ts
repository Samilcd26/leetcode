import { TreeNode } from "../Public/TreeNode";

class IsSameTree {
    static main(p: TreeNode | null, q: TreeNode | null): boolean {
        var mapP = new Map<Number, Array<Number>>();
        var mapQ = new Map<Number, Array<Number>>();
        var outPut:boolean=false;
    
        this.helper(p, 0, mapP);
        
        
        this.helper(q, 0, mapQ);
      
    
        for (const [key, tempP] of mapP) {
            
         
          
            var tempQ: Array<Number> = mapQ.get(key)??[]
            
     
            if (JSON.stringify(tempP) !== JSON.stringify(tempQ)) return false;
            
             
            
            
             
             
           
          }
    
    
        return true;
        
        
    };
    
    static helper(root: TreeNode | null, s: number | 0, temp: Map<Number, Array<Number>>) {
    
    
        
        if (!root){
            var tList = temp.get(s);
            tList === undefined ? tList = [-1] : tList.push(-1);
            temp.set(s, tList);
    
            return
        };
    
        s++;
        this.helper(root.left, s, temp);
    
        var tList = temp.get(s);
        tList === undefined ? tList = [root.val] : tList.push(root.val);
        temp.set(s, tList);
        
    
        this.helper(root.right, s, temp);
    
    }
}