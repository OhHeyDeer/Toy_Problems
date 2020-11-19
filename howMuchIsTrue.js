

// Create a function which returns the number of true values there are in an array.
// countTrue([true, false, false, true, false]) ➞ 2
// countTrue([false, false, false, false]) ➞ 0
// countTrue([]) ➞ 0



// Inputs: array of booleans
// Outputs: Number of trues in the array
// Constraints: All array items are of the type bool (true or false).
// Edge Cases: Return 0 if given an empty array

const countTrue = (boolArr) => {
    let count = 0;
    for (i of boolArr) {
        if (i === true) {
            count++;
        }
    }
    return count;
}


console.log(countTrue([true, false, false, true, false])) // 2
console.log(countTrue([false, false, false, false])); // 0
console.log(countTrue([])) // 0
