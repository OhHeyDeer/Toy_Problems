// Write a function redundant that takes in a string str and returns a function that returns str.

// Input: String
// Output: A function to return the param string

// Constraints: Must return a function
// Edge Cases: Empty string will return empty string

const redundant = (string) => {
    return () => { return string }
}





console.log(redundant("")());
console.log(redundant('words')());
console.log(redundant('lots of words')());