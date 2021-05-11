// Given a string s consists of some words separated by spaces, return the length of the last word in the string.
// If the last word does not exist, return 0.

// A word is a maximal substring consisting of non - space characters only.

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLastWord = function (s) {

    // Split the string with spaces 
    let splitString = s.split(" ");
    // Check the number of substrings, if less than 2, return 0
    if (splitString.length < 2) {
        return 0;
    } else {
        return splitString[splitString.length - 1].length;
    }
    // else return the length of the substring

};



// Test Cases

// Example 1:
console.log(lengthOfLastWord('Hello World'));
// Input: s = "Hello World"
// Output: 5



// Example 2:
console.log(lengthOfLastWord(' '));
// Input: s = " "
// Output: 0