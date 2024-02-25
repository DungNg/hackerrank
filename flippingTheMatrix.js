function flippingMatrix(matrix) {
    let n = matrix.length - 1;
    let m = n / 2;
    let sum = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < m; j++) {
            sum += Math.max(matrix[i][j], matrix[i][n - j], matrix[n - i][j], matrix[n - i][n - j]);
        }
    }
    
    return sum;
}

let input = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
console.log(flippingMatrix(input));