/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    p= p.split('').sort().join('')
    

    let i=0
    let j=p.length

    let res = []
    while(j<=s.length){
        let temp = s.substring(i,j).split('').sort().join('')

        if(temp==p)
            res.push(i)
        
        i++;
        j++;

    }
    return res
};
