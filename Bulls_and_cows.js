/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bull = 0
    let cow = 0
    let map = new Map()
    let set = new Set()

    for(let i of secret){
        map.set(i,parseInt(map.get(i))+1 || 1)
    }

    // console.log('map',map)

    for(let j=0; j<guess.length; j++){
        let c = guess.charAt(j)
        if(c == secret.charAt(j)){
            bull++;
            set.add(j)
            if(map.get(c)==1){
                map.delete(c)
            }
            else{
                map.set(c,parseInt(map.get(c))-1)
            }
            
        }
    }

    for(let j=0; j<guess.length; j++){
        let c = guess.charAt(j)
        if(set.has(j)){
            continue
        }

        if(map.has(c)){
            cow++;
            if(map.get(c)==1){
                map.delete(c)
            }
            else{
                map.set(c,parseInt(map.get(c))-1)
            }
        }
    }

    return bull.toString()+'A'+cow.toString()+'B'
    
};
