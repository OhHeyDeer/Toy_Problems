// A repdigit is a positive number composed out of the same digit. 
// Create a function that takes an integer and returns whether it's a repdigit or not.

// isRepdigit(66) ➞ true
// isRepdigit(0) ➞ true
// isRepdigit(-11) ➞ false



// Input: An integer
// Output: A boolean reflecting whether the integer is a positive number of the same digits


// Constraints: 
// Edge Cases: The Number 0 should return true



const isRepdigit = (rawNumber) => {

    // Declare number as a string for comparison
    const stringNumber = rawNumber.toString();

    // Check if the number is 0
    if (rawNumber === 0) {
        // -- Return true
        return true;
    }
    // Check if the number is negative, if so return false
    else if(rawNumber < 0) {
        return false
    }
    // Check if the first and second numbers are equal -- Stringify and compare
    else if(stringNumber[0] === stringNumber[1]) {
        // Return true if equal
        return true;
    } else {
        // Return false if not equal
        return false;
    }
}

console.log(isRepdigit(66)); // True
console.log(isRepdigit(0)); // True 
console.log(isRepdigit(-11)); // False