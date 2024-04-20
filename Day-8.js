// Question 8 - Factorial Finder

/**
 *  Write a Factorial Function that takes a Non-Negative Integer 'num' as Input & returns its Factorial.
 * 
 *  Some Examples of Factorial Calculations: 
 *  factorial(0) => 1
 *  factorial(1) => 1
 *  factorial(2) => 2
 *  factorial(3) => 6
 *  factorial(4) => 24
 *  factorial(5) => 120
 */

const factorial = (num) => {
    let fact = 1;
    for(let i = 1; i <= num ; i++){
        fact = fact * i;
    }
    return fact; 
}

console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(3));  // 6
