// Question 10
/**
 *  Write a function arraysAreEqual that takes 2 Arrays arr1 & arr2 as Input & returns true if the Arrays are Equal (i.e., Contain the Same Elements in the Same Order), and false Otherwise.
 * 
 *  console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));  // Output: true
 *  console.log(arraysAreEqual([1, 2, 3], [1, 2, 4]));  // Output: false
 *  console.log(arraysAreEqual([], []));                // Output: true
 * 
 *  NOTE:
 *  The function should return false if the Arrays have different Lengths.
 *  The function should compare each element of arr1 with arr2.
 */

const arraysAreEqual = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }

    return arr1.every((curVal, index) => curVal === arr2[index]);
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));  // Output: true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4]));  // Output: false
console.log(arraysAreEqual([], []));                // Output: true