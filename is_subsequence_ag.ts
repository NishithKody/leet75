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
