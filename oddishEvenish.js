// Create a function that determines whether a number is Oddish or Evenish.
// A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even.
// If a number is Oddish, return "Oddish".Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.


// Input: A Number of any size
// Output: Whether the sum of each index of the number adds to be even or odd

// Edge Case: 0 -- Even




const oddishOrEvenish = (number) => {
    // stringify the number using toString method
    let stringNum = number.toString();

    // Declare a total variable
    let total = 0;
    // Iterate across the string and add together the integer values from each index
    for(let i = 0; i < stringNum.length; i++) {
        total += Number.parseInt(stringNum[i]);
    }
    // Modulous the total by 2 and see if there is a remainder
    const remainder = total % 2;

    if (remainder === 0) {
        // return "Evenish" if there is not a remainder
        return "Evenish";
    } else {
        // return "Oddish" if there is a remainder
        return "Oddish";
    }

}

console.log(oddishOrEvenish(43)); //  ➞ "Oddish"
console.log(oddishOrEvenish(373)); //  ➞ "Oddish"
console.log(oddishOrEvenish(4433)); //  ➞ "Evenish"