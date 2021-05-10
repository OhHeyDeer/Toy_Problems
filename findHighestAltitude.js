// There is a biker going on a road trip.The road trip consists of n + 1 points at different altitudes.
// The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all(0 <= i < n).
// Return the highest altitude of a point.


const largestAltitude = (gain) => {

    // Define the currentAltitude or n value
    let currentAltitude = 0;
    // Define the highestAltitude value
    let highestAltitude = 0;

    // Loop through the gain array, adding each value to the currentAltitude.
    for (let i = 0; i < gain.length; i++) {
        currentAltitude += gain[i];
        // On each iteration, check if the currentAltitude is larger than the highest.
        if (currentAltitude > highestAltitude) {
            // If so, redefine highestAltitude to be currentAltitude
            highestAltitude = currentAltitude;
        }
    }
        // Return the highestAltitude after the loop is complete.
        return highestAltitude;

};



// Test Cases

// Example 1:
console.log(largestAltitude([-5, 1, 5, 0, -7]));
// Input: gain = [-5, 1, 5, 0, -7]
// Output: 1
// Explanation: The altitudes are[0, -5, -4, 1, 1, -6].
// The highest is 1.

// Example 2:
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
// Input: gain = [-4, -3, -2, -1, 4, 3, 2]
// Output: 0
// Explanation: The altitudes are[0, -4, -7, -9, -10, -6, -3, -1].
// The highest is 0.