/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    let oldColor = image[sr][sc]

    if(oldColor==color){
        return image
    }

    let dfs = (r,c)=>{

        
        if(image[r][c]==oldColor){
            image[r][c] = color
            if(r-1>=0){
                dfs(r-1, c)
            }

            if(c-1>=0){
                dfs(r,c-1)
            }

            if(r+1<image.length){
                dfs(r+1,c)
            }

            if(c+1<image[0].length){
                dfs(r,c+1)
            }
        }

        return

    }

    dfs(sr,sc);
    return image
    
};
