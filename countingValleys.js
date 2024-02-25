function countingValleys(steps, path) {
    // Write your code here
    let valeyCount = 0;
    let stepCount = 0;
    let pathAr = path.split('');
    for(let step = 0; step < pathAr.length; step++){
        let isInValeyBefore = stepCount < 0 ? true : false;
        if(pathAr[step] === 'U'){
            stepCount++;
        }
        
        if(pathAr[step] === 'D'){
            stepCount--;
        }
        
        if(isInValeyBefore && stepCount === 0){
            valeyCount++;
        }
    }
    return valeyCount;
}

console.log(countingValleys(8, "UDDDUDUU"))