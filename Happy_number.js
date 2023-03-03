/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   

    let util=(n)=>{
        let res =0
        while(n>0){
            let rem = n%10
            res= res + (rem*rem)
            n = parseInt(n/10)
        }
        return res
    }

    let count = n;
    for(let i =0; i<100; i++){
        let val = util(n)
        if(val==1)
            return true
        else
            n=val
    }

    return false;

    
    
};
