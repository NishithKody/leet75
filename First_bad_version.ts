/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let low = 1;
        let high = n;
        let index = -1;
       
        while(low<=high){
        let middle = Math.floor((low+high)/2)       
            if(isBadVersion(middle)){
                index = middle
                high = middle-1
            }
            else{
                low = middle+1
            }
        }

        return index
    };
};
