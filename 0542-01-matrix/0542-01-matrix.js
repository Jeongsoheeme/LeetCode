/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let i, l, j, m;
    
    let q = [];        

    for (i = 0, l = mat.length; i < l; i++) { 
        for ( j = 0, m = mat[0].length; j < m; j++) {   
            if (mat[i][j] === 0) {
                q.push([i, j, 0]);
            } else {
                mat[i][j] = Infinity;
            }  
        } 
    }

    let dir = [[1,0],[0,1],[-1,0],[0,-1]];
    
    while (q.length) {
        let pos = q.shift();
        
        if (mat[pos[0]][pos[1]] > pos[2]) {
            mat[pos[0]][pos[1]] = pos[2];
        }
        
        dir.forEach(function(d) {
            let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];
            if (next[0] > -1 && next[0] < mat.length && next[1] > -1 && next[1] < mat[0].length) {
                if (mat[next[0]][next[1]] === Infinity) {
                    q.push(next);
                }
            }
        });
    }
    return mat;

};
