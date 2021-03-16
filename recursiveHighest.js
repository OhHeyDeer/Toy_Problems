
// Create a function that finds the highest integer in the array using recursion.
// findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99
// findHighest([0, 12, 4, 87]) ➞ 87
// findHighest([6,7,8]) ➞ 8


// Input: an array of values
// Output: the largest value in the array

// Constraints: Has to be a recursive function
// Edge Cases: Handle Negative numbers

const findHighest = (array) => {

    // Takes in the array and recursively removes one as it moves across the array

    // Declare an array as a duplicate of the input array
    let largest = array[array.length - 1]; // last value first
    array.pop(); // Get rid of the last index which is already the largest

    // Declare a helper function that will take in the array
    const helper = (arr) => {

        if (arr.length === 0) {
            return largest;
        } else {
            // Will check if the last value is larger than the current largest
            if (arr[arr.length - 1] >= largest) {
                // If it is the largest, change the largest
                largest = arr[arr.length - 1];
            }
            // Always pop the last index of the array that was checked
            arr.pop();
            // Call the helper function again if the array is not empty
            return helper(arr);
        }
    }
    
    // Base Case: Helper will check if the array is empty
    if (array.length === 0) {
        return null;
    } else {
        // Invoke the helper function on the array
        return helper(array);
    }
  
}

// Test Cases

console.log(findHighest([-1, 3, 5, 6, 99, 12, 2])); // 99
console.log(findHighest([0, 12, 4, 87])); // 87
console.log(findHighest([6, 7, 8])); // 8

