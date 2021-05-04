/**
 * @param {number[]} nums
 * @return {string}
 */


// Problem:
// Given a list of non-negative integers nums, arrange them such that they form the largest number.



var largestNumber = function (nums) {

    // Declare the stringLargestNumber
    let largestNumString = '';

    // Duplicate numbers array
    let numbersArray = [... nums];
    let highest;
    let indexHighest;
    // Loop through using a while loop, checking the highest value in the array of numbers
    // -- Base Case: Is there a 0 value in the array
    while (numbersArray[0]) {
        // -- Take the highest value in the array and add it to the string
        highest = Math.max(... numbersArray);
        // Separate the double digits with the single digits first
        // Find the highest single digit and highest double digit
        



        indexHighest = numbersArray.indexOf(highest); // Could have issues with multiple numbers of the same value
        largestNumString += highest;

        // -- Remove this value from the nums array
        numbersArray.splice(indexHighest, 1); // Remove the value
    }

    return largestNumString;

};





// Test Cases


// Example 1:
console.log(largestNumber([10,2]));
// Input: nums = [10, 2]
// Output: "210"


// Example 2:
console.log(largestNumber([3, 30, 34, 5, 9]));
// Input: nums = [3, 30, 34, 5, 9]
// Output: "9534330"


// Example 3:
console.log(largestNumber([1]));
// Input: nums = [1]
// Output: "1"


// Example 4:
console.log(largestNumber([10]));
// Input: nums = [10]
// Output: "10"