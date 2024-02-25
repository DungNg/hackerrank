function countingSort(arr) {
    // Write your code here
    let result = [];

    for (let index = 0; index < 100; index++) {
        result[index] = 0;
    }
    
    arr.forEach(item => {
        result[item]++;
    })
    return result;
}