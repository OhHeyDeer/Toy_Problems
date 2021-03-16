// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".
// To reiterate, elements of the array will be either integers or arrays with a single integer.


// sortIt([4, 1, 3]) ➞ [1, 3, 4]
// sortIt([[4], [1], [3]]) ➞[[1], [3], [4]]
// sortIt([4, [1], 3]) ➞[[1], 3, 4]
// sortIt([[4], 1, [3]]) ➞[1, [3], [4]]
// sortIt([[3], 4, [2], [5], 1, 6]) ➞[1, [2], [3], 4, [5], 6]


// Input: An array of values and arrays with single values
// Output: the array sorted but not mutated




const sortIt = (weirdArray) => {

    // 
    

}



// Test Cases 

console.log(sortIt([4, 1, 3]));
console.log(sortIt([[4], [1], [3]]));
console.log(sortIt([4, [1], 3]));
console.log(sortIt([[4], 1, [3]]));
console.log(sortIt([[3], 4, [2], [5], 1, 6]));

