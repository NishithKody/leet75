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


///-----------// better time compx
// ref  - https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1739353/javascript-typescript-sliding-window-solution-time-81-faster-memory-6-less/?envType=study-plan&id=level-1&orderBy=most_votes&page=2&languageTags=javascript
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

    let pMap = new Map()
    let sMap = new Map()
    let res = []

    for(let i =0; i<p.length; i++){
        pMap.set(p[i],pMap.get(p[i])+1 ||1)
        sMap.set(s[i],sMap.get(s[i])+1 ||1)
    }

    let mapCheck = (map1,map2)=>{
        for( let [key,val] of map1){
            if(map2.get(key)!=val){
                return false
            }
        }
        return true
    }

    let j = p.length

    while(j<s.length){
        if(mapCheck(pMap, sMap)){
            res.push(j-p.length)
        }

        sMap.set(s[j],sMap.get(s[j])+1 || 1)

        if(sMap.get(s[j-p.length])==1)
            sMap.delete(s[j-p.length])
        else 
            sMap.set(s[j-p.length],sMap.get(s[j-p.length])-1 )
        j++;
    }

    if(mapCheck(pMap, sMap)){
            res.push(j-p.length)
    }

    return res
   
};
