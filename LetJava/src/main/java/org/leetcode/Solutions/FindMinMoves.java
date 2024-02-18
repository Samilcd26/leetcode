package org.leetcode.Solutions;

import java.util.Arrays;

public class FindMinMoves {

    public static int main(int[] machines){
        int sum=0;
        int count=0;
        int maxIndex=0;
        int minIndex=0;
        boolean breakAt=false;
        for (int i = 0; i < machines.length; i++) {
            sum+=machines[i];
        }

        if ((sum %machines.length)!=0) return -1;
        int aim =sum/machines.length;

       do{
           /*
           for (int i = 0; i < machines.length; i++) {
               maxIndex = machines[i] > machines[maxIndex] ? i : maxIndex;
               minIndex=machines[i]<machines[minIndex]?i:minIndex;
           }
            */

           count++;
           for (int i = 0; i < machines.length; i++) {
               if (machines[i]!=aim && machines[i]>aim){
                   
               }



           }


           for (int i = 0; i < machines.length; i++) {
               breakAt= machines[i] == aim;
           }
           System.out.println(breakAt);
           /*
           if (maxIndex==0 && machines[0]!=aim){
               count++;
               machines[0]-=1;
               machines[1]+=1;

           } else if (maxIndex==2&& machines[0]!=aim) {
               count++;
               machines[2]-=1;
               machines[1]+=1;

           }else if (machines[1]!=aim){
               count++;
               machines[1]-=1;
               if (machines[0]>machines[2]){
                   machines[2]+=1;
               }else{
                   machines[0]+=1;
               }
           }else{
               break;
           }
           */
       }while (!breakAt);
       return count;
    }
}
