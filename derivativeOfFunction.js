// Create a function that takes numbers b and m as arguments 
// and returns the derivative of the function f(x)=x ^ b with respect to x evaluated at x = m, where b and m are constants.

// derivative(1, 4) ➞ 1
// --- 4^0 * 1
// ---- 1
// derivative(3, -2) ➞ 12
// --- -2 ^ 3
// --- -2^2 * 3
// ---- 12
// derivative(4, -3) ➞ -108
// --- -3^4
// --- -3^3 * 4
// ---- -108



// Inputs: two number values -- b,m
// Output: the derivative of the two numbers

const derivative = (b, m) => {
    // Raise the m value to the b - 1th power 
    // Multiply the equation by the b value
    const formula = (m**(b-1)) * b;
    // return value
    return formula;
}

// Test Cases

console.log(derivative(1, 4));
console.log(derivative(3, -2));
console.log(derivative(4, -3));