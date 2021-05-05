


// For two strings s and t, we say "t divides s" if and only if s = t + ... + t(t concatenated with itself 1 or more times)

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

var gcdOfStrings = function (str1, str2) {


    // If string1 can be built using the concatination of multiple string2's
    let finalString = '';
    // First, check to see if the length of string1 is divisible by the length of string2.
    let length1 = str1.split('').length;
    let length2 = str2.split('').length;
    // -- Set this divisor to a variable
    let divisor = length1/length2;
    // ----- If the divisor is a whole number, concatenate string2 by the divisor and check if equal
    if (divisor - Math.floor(divisor) === 0) {
        while(finalString.length < length1) {
            finalString += str2;
        }
        if (finalString === str1) {
            return str1;
        } else {
            return '';
        }
    } else {
        return "";
    }
    // ----- Else if the divisor is not a whole number, return an empty string.

    return finalString;
};





// Test Cases

// Example 1:
console.log(gcdOfStrings("ABCABC", "ABC"));
// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"


// Example 2:
console.log(gcdOfStrings("ABABAB", "ABAB"));
// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"


// Example 3:
console.log(gcdOfStrings("LEET", "CODE"));
// Input: str1 = "LEET", str2 = "CODE"
// Output: ""


// Example 4:
console.log(gcdOfStrings("ABCDEF", "ABC"));
// Input: str1 = "ABCDEF", str2 = "ABC"
// Output: ""
