/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let row = grid.length
    let col = grid[0].length
    let count=0;
    let config = [[0,1],[1,0],[-1,0], [0,-1]]
    
    let dfs = (r,c)=>{
        if(r>=row || c>=col || r<0 || c<0 ||grid[r][c]==0){
            return
        }

        grid[r][c]=0

        for(let i of config){
            dfs(r+i[0],c+i[1])
        }

    }

    for(let i=0; i<row; i++){
        for(let j=0; j<col;j++){
            if(grid[i][j]=='1'){
                count++;
                dfs(i,j)
            }
        }
    }

    return count;
};
