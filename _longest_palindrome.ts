function longestPalindrome(s: string): number {
    let map = new Map();

    for(let i of s){
        map.set(i,map.get(i)+1 || 1)
    }

    let count =0;
    let flag =0;
    let lg= 0;

    console.log(map)
    for(let i of map){
        if(i[1]%2==0){
            console.log('even',i[1])
            count = count + i[1];
        }
        else{
            flag=1;
            if(i[1]>1){
                count = count + i[1] -1
            }
        }
    }

    if(flag==1){
        count=count+1
    }

    console.log(count)
    return count;


};


//----------------attempt 2

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {

    let map = new Map()
    let res = 0;
    
   for(let i of s){
       map.set(i,map.get(i)+1||1)
   }
//    console.log(map)
    let flag=0;
   for(let i of map){
       if(Math.floor(i[1]%2)==0){
           res = res + i[1]
       }
       else{
           flag=1;
           res = res + i[1] -1
       }
   }
   if(flag==1){
       return res +1
   }
   else 
    return res;
    
};
