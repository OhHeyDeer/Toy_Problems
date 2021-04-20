

// Given a positive integer
// If n is even, replace with n/2
// If n is odd, replace with n+1 or n-1

// Return the minimum number of operations to get the number to 1

const integerReplacement = (n) => {
    // While n is not equal to 1, loop through and count the number of operations
    let count = 0;
    let current = n; // Redefine n as a holding variable
    while (current !== 1) {

        if (current % 2 === 0) { // If Even
            current = current/2;
        } else { // If Odd
            
            if (current < 0) { // If the current is below and needs to decrease
                current = current - 1;
            } else { // If the current is larger than 1 needs to increase
                current = current + 1;
            }
        }
        count++; // Increase the operation count
    }
    return count;
};


// Test Cases -- All Pass
console.log(integerReplacement(8)); // 3
console.log(integerReplacement(7)); // 4
console.log(integerReplacement(4)); // 2 

