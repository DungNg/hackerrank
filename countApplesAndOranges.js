function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let [numOfA, numOfB] = [0,0];
    apples.forEach(d => {
        if(d + a >= s && d + a <= t){
            numOfA++;
        }
    })
    
    oranges.forEach(d => {
        if(d + b >= s && d + b <= t){
            numOfB++;
        }
    })
    console.log(numOfA);
    console.log(numOfB);
}