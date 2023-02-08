function isSubsequence(s: string, t: string): boolean {

    let i = 0;
    let j =0;
    let count = s.length;

    while(i<s.length && j<t.length){
        if(s[i]==t[j]){
            i++;
            j++;
            count--;
        }
        else{
            j++;
        }
    }

    if(count==0)
        return true;
    else
        return false;

};

//--------------------------
//attempt 2
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let p1 = 0;
    let p2 = 0
    while(p1<s.length && p2<t.length){
        if(s[p1] == t[p2]){
            p1++;
            p2++;
        }
        else{
            p2++;
        }
    }
    if(p1 == s.length){
        return true;
    }

    return false;
    
};
