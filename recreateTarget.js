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

    while (JSON.stringify(arrayA) !== JSON.stringify(target)) { // While the two arrays are inequal using their stringified format

        // Find the sum of arrayA and check if this number exists within target
        let totalSum = arrayA.reduce(reducer);

        // If the target array has the sum in it, replace the correct index with the totalSum
        if (target.includes(totalSum)) {
            let index = target.indexOf(totalSum);
            arrayA.splice(index, 1, totalSum);

        } else {

            // Replace the sum with the largest value in the target array area
            let largestTarget = Math.max(... target);
            let indexMax = target.indexOf(largestTarget);

            // Replace the value in arrayA at indexMax with the totalSum ONLY IF it is smaller than the largest target
            if (arrayA[indexMax] < largestTarget) {
                arrayA.splice(indexMax, 1, totalSum);
            }


            // Attempts to fix the final issue
            // if (target[indexMin] > totalSum) { // Target value is larger than the replacement value
            //     arrayA.splice(indexMin, 1, totalSum);
            // }
           
        }
    }
    // Will return out when the loop ends meaning the arrays are the same.
    return true;
};
// ----------------------------------------------------------------------------
// Test Cases

console.log(isPossible([9,3,5]));
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
// Explanation:
// [1, 1] -- Sum 2 choose index 1
// [1, 2] -- Sum 3 choose index 0
// [3, 2] -- Sum 5 choose index 1
// [3, 5] -- Sum 8 choose index 0
// [8, 5] Done
// ----------------------------------------------------------------------------