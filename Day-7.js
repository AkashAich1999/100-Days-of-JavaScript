/**
 *  Write a function findMax which takes an Array of Numbers as Input & Returns The Maximum Number in an Array.
 * 
 *  console.log(findMax([1, 5, 3, 9, 2]));   // Output: 9
 *  console.log(findMax([-10, -5, -3, -9, -2]));   // Output: -2
 *  console.log(findMax([5]));   // Output: 5
 */

const findMax = (arr) => {
    // console.log(arr);
    // console.log(...arr);
    return Math.max(...arr);
}

console.log(findMax([1, 5, 3, 9, 2]));   // Output: 9
console.log(findMax([-10, -5, -3, -9, -2]));   // Output: -2
console.log(findMax([5]));   // Output: 5