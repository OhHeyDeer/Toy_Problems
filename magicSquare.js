// In recreational mathematics, a square array of numbers, usually positive integers, 
// is called a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same.

// Create a function that takes a square 2D array as an argument and returns a Boolean(if it is: true, if it isn't: false).

// isMagicSquare([
//     [2, 7, 6],
//     [9, 5, 1],
//     [4, 3, 8]
// ]) ➞ true

// isMagicSquare([
//     [16, 3, 2, 13],
//     [5, 10, 11, 8],
//     [9, 6, 7, 12],
//     [4, 15, 14, 1]
// ]) ➞ true

// isMagicSquare([
//     [1, 14, 14, 4],
//     [11, 7, 6, 9],
//     [8, 11, 10, 5],
//     [13, 2, 3, 15]
// ]) ➞ false


// Inputs: an array of arrays
// Output: a boolean reflecting whether the 2D array is a magic square

const isMagicSquare = (square) => {


    // Declare total as the sum of the first row
    let total = 0;
    for (let i = 0; i < square[0].length; i++) {
        total += square[0][i];
    }

    // Iterate across each row Checking if they add to the same as the first row
    for (let j = 0; j < square.length; j++) {
        let current = square[j];
        let rowTotal = 0;
        for(let k = 0; k < current.length; k++) {  
            // Check the row and the col
            rowTotal += current[k];
        }
        if (rowTotal !== total) {
            return false;
        }
    }

    // Iterate across one row, adding each col value



    
}
