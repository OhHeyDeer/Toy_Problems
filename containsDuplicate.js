// Given an integer array nums
// return true if any value appears at least twice in the array
// return false if every element is distinct


const containsDuplicate = (arrayOfInts) => {

    let holdingArray = [];
    // Iterate thorugh the array, pushing to a new array only when a unique value
    for (let i = 0; i < arrayOfInts.length; i++) {
        // Check if the extra array has the value already
        if (holdingArray.includes(arrayOfInts[i])) {
            return true;
        } else {
            // Otherwise, push the new value into the array
            holdingArray.push(arrayOfInts[i]);
        }
    }

    // If the loop ends and no values are repeated.
    return false;
}



// Test Cases
console.log(containsDuplicate([1, 2, 3, 1])); // True 
console.log(containsDuplicate([1, 2, 3, 4])); // False
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true

