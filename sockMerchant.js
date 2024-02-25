function sockMerchant(n, ar) {
    // Write your code here
    let countSocks = {};
    ar.forEach(sock => {
        if(countSocks[sock] != null){
            countSocks[sock]++;
        }else{
            countSocks[sock] = 1;
        }
    });
    let sum = 0;
    for(let sock in countSocks){
        if(countSocks[sock] > 1){
            sum+=Math.floor(countSocks[sock]/2);
        }
    }
    return sum;
}