function pushFront(arr, value) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = value;
    return arr;
}
console.log(pushFront([5, 7, 2, 3], 8)); // Output: [8, 5, 7, 2, 3]
console.log(pushFront([99], 7)); // Output: [7, 99]

function popFront(arr) {
    const frontValue = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    console.log(frontValue + " returned, with " + arr + " printed in the function");
    return frontValue;
}
console.log(popFront([0, 5, 10, 15])); // Output: 0 returned, with [5, 10, 15] printed in the function
console.log(popFront([4, 5, 7, 9])); // Output: 4 returned, with [5, 7, 9] printed in the function

function insertAt(arr, index, value) {
    for (let i = arr.length; i > index; i--) {
        arr[i] = arr[i - 1];
    }
    arr[index] = value;
    return arr;
}
console.log(insertAt([100, 200, 5], 2, 311)); // Output: [100, 200, 311, 5]
console.log(insertAt([9, 33, 7], 1, 42)); // Output: [9, 42, 33, 7]

function removeAt(arr, index) {
    const removedValue = arr[index];
    for (let i = index; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length--;
    console.log(removedValue + " returned, with " + arr + " printed in the function");
    return removedValue;
}
console.log(removeAt([1000, 3, 204, 77], 1)); // Output: 3 returned, with [1000, 204, 77] printed in the function
console.log(removeAt([8, 20, 55, 44, 98], 3)); // Output: 44 returned, with [8, 20, 55, 98] printed in the function


function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
    return arr;
}
console.log(swapPairs([1, 2, 3, 4])); // Output: [2, 1, 4, 3]
console.log(swapPairs(["Brendan", true, 42])); // Output: [true, "Brendan", 42]

function removeDupes(arr) {
    const result = [];
    let prevValue = null;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== prevValue) {
            result.push(arr[i]);
            prevValue = arr[i];
        }
    }
    return result;
}
console.log(removeDupes([-2, -2, 3.14, 5, 5, 10])); // Output: [-2, 3.14, 5, 10]
console.log(removeDupes([9, 19, 19, 19, 19, 19, 29])); // Output: [9, 19, 29]