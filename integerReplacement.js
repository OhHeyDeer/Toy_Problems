

// Given a positive integer
// If n is even, replace with n/2
// If n is odd, replace with n+1 or n-1

// Return the minimum number of operations to get the number to 1

const integerReplacement = (n) => {

    // While n is not equal to 1, loop through and count the number of operations
    let count = 0;
    let current = n;
    while (current !== 1) {

        if (current % 2 === 0) { // If Even
            current = current/2;
        } else {
            if (current < 1) { // if the current is below and needs to increase

            } else { // if the current is larger than 1 needs to decrease

            }
        }
        count++;
    }



};

console.log(integerReplacement(8)); // 3
console.log(integerReplacement(7)); // 4
console.log(integerReplacement(4)); // 2 