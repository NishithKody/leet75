/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {

    let stack = []   //This is to store the result
    let k = []  //This is to store the numbers

    let numVal = "" //Used during extraction of number from string

    for(let i of s){
        if(!Number.isNaN(parseInt(i))){   //Get the number
            numVal = numVal + i
            continue
        }

        if(i==']'){     //End of block, start poping
            let temp = []
            let n = k.pop()

            while(stack[stack.length-1]!='['){    //Get elements from current block
                let ele = stack.pop()
                temp.unshift(ele)     
            }
            stack.pop()

            let val = []
            for(let i=n; i>0; i--){   //Repeat by the number given
                for(let j of temp){
                    val.push(j)
                }
            }

            for(let i of val){    //Push the value back into the stack
                stack.push(i)
            }
            
        }

        else if(i=='['){
            k.push(parseInt(numVal))
            numVal=""
            stack.push(i)
            // continue
        }
        else stack.push(i)
        

    }

    return stack.join('')
    
};
