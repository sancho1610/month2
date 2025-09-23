var arr = [3, 17, 5, 29, 11, 42, 8, 19];

function findMax(arr) {
    if (arr.length === 0) return ;

    var max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax(arr));