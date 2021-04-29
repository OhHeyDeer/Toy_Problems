/**
 * @param {number[]} target
 * @return {boolean}
 */




var isPossible = function (target) {

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    // Declare Array of 1's
    let arrayA = [];
    for (let j = 0; j < target.length; j++) {
        arrayA.push(1);
    }

    let fact = false;

    while (JSON.stringify(arrayA) !== JSON.stringify(target)) { // While the two arrays are inequal

        // Find the sum of arrayA and check if this number exists within target
        let totalSum = arrayA.reduce(reducer);

        // If the target array has the sum in it, replace the correct index with the totalSum
        if (target.includes(totalSum)) {
            let index = target.indexOf(totalSum);
            arrayA.splice(index, 1, totalSum);
        } else { // Return false is the array does not include the sum. ** Will need to change for test case 3
            return false;
        }
    }

    // Will return out when the loop ends meaning the arrays are the same.
    return true;

};




// Test Cases


console.log(isPossible([9,3,5]));
// isPossible([9,3,5]);
// Input: target = [9, 3, 5]
// Output: true
// Explanation: Start with [1, 1, 1]
// [1, 1, 1], sum = 3 choose index 1
// [1, 3, 1], sum = 5 choose index 2
// [1, 3, 5], sum = 9 choose index 0
// [9, 3, 5] Done

console.log(isPossible([1, 1, 1, 2]))
// Input: target = [1, 1, 1, 2]
// Output: false
// Explanation: Impossible to create target array from[1, 1, 1, 1].

// *** HARDER *****
console.log(isPossible([8, 5]));
// Input: target = [8, 5]
// Output: true

// [1, 1]
// [1, 2]
// [3, 2]
// [3, 5]
// [8, 5]