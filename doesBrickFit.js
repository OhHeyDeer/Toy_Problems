// Write the function that takes three dimensions of a brick: 
// height(a), width(b) and depth(c) 
// and returns true if this brick can fit into a hole with the 
// width(w) and height(h).

// doesBrickFit(1, 1, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 2, 1, 1) ➞ false

const doesBrickFit = (brickHeight, brickWidth, brickDepth, holeWidth, holeHeight) => {

    // Compare the surface area of two sides of the brick, (only two possible ways to pass the brick through the hole)
    // Declare brickArea1, brickArea2 and holeArea as their respective formulas
    const brickArea1 = brickHeight * brickWidth;
    const brickArea2 = brickDepth * brickHeight;
    const holeArea = holeHeight * holeWidth;
    // Check if the brickArea1 or 2 is smaller than the holeArea. If so, return true, else false
    if (brickArea1 <= holeArea) {
        return true;
    } else if (brickArea2 <= holeArea) {
        return true;
    } else {
        return false;
    }
}

// Test Cases

console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(1, 2, 2, 1, 1));