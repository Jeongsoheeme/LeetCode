/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {

    const firstColor = image[sr][sc];

    const fillAdjacentCells = (image, sr, sc, firstColor, newcolor) => {
        if (image[sr][sc] === firstColor) {
            image[sr][sc] = newcolor;

            if (sr > 0) {
                fillAdjacentCells(image, sr - 1, sc, firstColor, color);
            } 
            if (sc > 0) {
                fillAdjacentCells(image, sr, sc - 1, firstColor, color);
            } 
            if (sc < image[0].length - 1) {
                fillAdjacentCells(image, sr, sc + 1, firstColor, color);
            } 
            if (sr < image.length - 1) {
                fillAdjacentCells(image, sr + 1, sc, firstColor, color);
            }
        } else {
            return image;
        }
    }

    if (image[sr][sc] === color) {
        return image;
    } else {
        fillAdjacentCells(image, sr, sc, firstColor, color);
        return image;
    }
};