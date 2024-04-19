// Question 5 - Sort an Array

/**
 *  Write a function to sort an Array of Numbers in an Ascending Order.
 *  
 *  console.log(sortAscending([5, 3, 1, 8]));  // output: [1, 3, 5, 8] 
 *  console.log(sortAscending([5, 3, 10, 8]));  // output: [3, 5, 8, 10] 
 */

/**
 *  Todo Requirements:
 *  The function should take an Array of Numbers as Input.
 *  It should return a New Array with the Numbers Sorted in Ascending Order.
 *  The Original Array should remain Unchanged.
 *  
 */

const sortAscending = (arr) => {
    return arr.sort((a, b) => a - b);
};

console.log(sortAscending([5, 3, 1, 8]));
console.log(sortAscending([5, 3, 10, 8]));