// Question 4 -

/**
 *  Write a function called checkTriangleType that takes 3 parameters representing the lengths of the sides of a Triangle.
 *  The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".
 *
 *  console.log(checkTriangleType(3, 3, 3));   // output: "equilateral"
 *  console.log(checkTriangleType(3, 4, 3));   // output: "isosceles"
 *  console.log(checkTriangleType(5, 8, 6));   // output: "scalene"
 */

/**
 *  Todo (The function should adhere to the following Rules):
 *  If all the 3 Sides are of Equal Length, return "equilateral".
 *  If only 2 Sides are of Equal Length, return "isosceles".
 *  If all 3 Sides have Different Lengths, return "Scalene".
 */

const checkTriangleType = (a, b, c) => {
    if(a === b && b === c) return "equilateral";
    if(a === b || b === c || a === c) return "isosceles";
    return "scalene";
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(5, 8, 6));