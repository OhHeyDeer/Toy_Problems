/**
 * @param {number[]} target
 * @return {boolean}
 */




var isPossible = function (target) {

    // Declare Array of 1's
    let arrayA = [];
    for (let j = 0; j < target.length; j++) {
        arrayA.push(1);
    }

    console.log(arrayA);
    console.log(target);


    // While target !=== A
    // Find the sum and check if it is an integer in the target

    // If so then 




};




// Test Cases


// console.log(isPossible([9,3,5]));
isPossible([9,3,5]);
// Input: target = [9, 3, 5]
// Output: true
// Explanation: Start with [1, 1, 1]
// [1, 1, 1], sum = 3 choose index 1
// [1, 3, 1], sum = 5 choose index 2
// [1, 3, 5], sum = 9 choose index 0
// [9, 3, 5] Done

// Input: target = [1, 1, 1, 2]
// Output: false
// Explanation: Impossible to create target array from[1, 1, 1, 1].

// *** HARDER *****
// Input: target = [8, 5]
// Output: true