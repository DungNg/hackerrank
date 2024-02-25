function getMoneySpent(keyboards, drives, b) {
    keyboards.sort((a, b) => b - a); // Sort keyboards in descending order
    drives.sort((a, b) => a - b);    // Sort drives in ascending order

    let maxSpent = -1;
    let keyboardIndex = 0;
    let driveIndex = 0;

    while (keyboardIndex < keyboards.length && driveIndex < drives.length) {
        const totalCost = keyboards[keyboardIndex] + drives[driveIndex];
        
        if (totalCost <= b) {
            maxSpent = Math.max(maxSpent, totalCost);
            driveIndex++;
        } else {
            keyboardIndex++;
        }
    }

    return maxSpent;
}




