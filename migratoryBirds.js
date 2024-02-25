function migratoryBirds(arr) {
    // Write your code here
    let count = {};
    arr.forEach(bird => {
        if (count[bird] != null) {
            count[bird]++;
        } else {
            count[bird] = 1;
        }
    });
    let max = { id: 0, value: 0 };
    for (let id in count) {
        if (max.id === 0 && max.value === 0) {
            max = { id: id, value: count[id] };
            continue;
        }
        if (count[id] > max.value) {
            max = { id: id, value: count[id] };
        }
    }
    return max.id;
}

let input = "1 2 3 4 5 4 3 2 1 3 4";
console.log(migratoryBirds(input.split(" ")));