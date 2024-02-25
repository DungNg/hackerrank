function diagonalDifference(arr) { // trị tuyệt đối hiệu đường chéo
    // Write your code here
    let ltr = 0; //left to right
    let rtl = 0; //right to left
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(i == j){
                ltr += arr[i][j];
            }
            
            if(i + j === arr.length - 1){
                rtl += arr[i][j];
            }
        }
    }
    return Math.abs(ltr - rtl);
}