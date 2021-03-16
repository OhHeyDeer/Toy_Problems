// Create a function that takes an array of numbers and return "Boom!" 
// if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.


// Inputs: an Array of numbers
// Outputs: return "Boom!" if the number 7 exists

// Constraints: Number doesn't exist in the array: "There is no 7 in the array"
// -- Array could contain




const sevenBoom = (arrOfNums) => {
    // Iterate over each index
    for (let i = 0; i < arrOfNums.length; i++) {
        const stringNum = arrOfNums[i].toString();
        if (stringNum.length > 1) {
            for (let j = 0; j < stringNum.length; j++) {
                // -- Check if either index in the stringified index is the number 7
                if (stringNum[j] === '7') {
                    return "Boom!";
                }
            } 
        } else {
            // -- Check if the index is the number 7.
            if (stringNum === '7') {
                return "Boom!";
            }
        }
    }

    // Fail Case if no 'Booms' are hit
    return "there is no 7 in the array";
    
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));