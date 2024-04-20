// Question 9 - Calculate The Average

/**
 *  Write a function called calculateAverage that takes an Array of Numbers as input & returns the Average of those Numbers.
 * 
 *  Your Function Should: 
 *  Accept an Array of Numbers as Input.
 *  Calculate the Sum of all the Numbers in the Array.
 *  Divide the Sum by the Total Number Of Elements in the Array to find the Average.
 *  Return the Calculated Average.
 */

const calculateAverage = (arr) => {
    let sum = arr.reduce((accum, curr) => accum + curr, 0);
    let average = sum / arr.length;
    // console.log(average);
    return average;
}

console.log(calculateAverage([5, 10, 2, 8]));  // Output: 6