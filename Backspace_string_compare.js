/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

    let stack1 = []
    let stack2 = []

    for(let i of s){
        if(i=='#'){
            stack1.pop()
        }
        else{
            stack1.push(i)
        }
    }

    for(let i of t){
        if(i=='#'){
            stack2.pop()
        }
        else{
            stack2.push(i)
        }
    }

    if(stack1.join('')==stack2.join(''))
        return true
    else
        return false
};
