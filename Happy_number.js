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


// Optimal way is to use a set and keep record of all the values. 
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   
    let set = new Set();
    let util=(n)=>{
        let res =0
        while(n>0){
            let rem = n%10
            res= res + (rem*rem)
            n = parseInt(n/10)
        }
        return res
    }

    while(n!=1){
        if(set.has(n))
            return false
        
        set.add(n)
        n = util(n)
    }

    return true

    
    
};
