function processData(input) {
    //Enter your code here
    let arr = input.split('\n')[2].split(' ');
    let k = Math.floor(arr.length / 2);
    let maxIndex = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > arr[maxIndex]) {
            maxIndex = index;
        }
    }

    let temp = arr[k];
    arr[k] = arr[maxIndex];
    arr[maxIndex] = temp;

    let arrLeft = [];
    let arrRight = [];
    
    for (let index = 0; index < k; index++) {
        arrLeft.push(arr[index]);
    }

    for (let index = k + 1; index < arr.length; index++) {
        arrRight.push(arr[index]);
    }

    console.log([...arrLeft.sort((a, b) => a - b), arr[k], ...arrRight.sort((a, b) => b - a)].join(' '));
}
