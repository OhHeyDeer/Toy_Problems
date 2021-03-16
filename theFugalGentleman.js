// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. 
// However, he has little knowledge of how to choose a good bottle. 
// Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. 
// In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine 
// he will buy for the party. 
// If given an empty array, return null. 
// If given an array of only one, 
// Atticus will buy that wine.


// chosenWine([
//     { name: "Wine A", price: 8.99 },
//     { name: "Wine 32", price: 13.99 },
//     { name: "Wine 9", price: 10.99 }
// ]) ➞ "Wine 9"

// chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"

// chosenWine([]) ➞ null


// Input: an Array of wine objects with name and price
// Output: The wine name that is selected


const chosenWine = (arrOfWine) => {

    // Check if the array is empty --> return null
    if (arrOfWine[0] === undefined) {
        return null;
    }
    // Check if the array has length 1 --> return the name of the single wine
    if (arrOfWine.length === 1) {
        return arrOfWine[0].name;
    }

    // Declare cheapest and secondCheapest vars
    let cheapest = arrOfWine[0];
    let secondCheapest;

    // Iterate across the array of wine
    for (let i = 0; i < arrOfWine.length; i++) {
        // -- Check if each value is cheaper than the cheapest
        let current = arrOfWine[i];
        if (current.price <= cheapest.price) {
            // IF SO: declare the cheapest as the current
            cheapest = current;
        } else {
            if (secondCheapest === undefined) {
                secondCheapest = current;
            // ELSE: Check the secondCheapest to see if it is smaller than that
            } else if (current.price <= secondCheapest.price) { 
                // IF SO: declare secondCheapest as the current
                secondCheapest = current;
            }
        }
    }
    return secondCheapest.name;
}


// Test Cases

console.log(chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 }
])); // Wine 9
console.log(chosenWine([{ name: "Wine A", price: 8.99 }])); // Wine A
console.log(chosenWine([])); // null