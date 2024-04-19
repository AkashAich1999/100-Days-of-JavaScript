// Hash Tag Generator - Question 2

/**
 *  You are required to implement a function generateHash that generates a Hash Tag from a given Input String.
 * 
 *  The Hash should be constructed as follows:
 *  The input string should be converted to a Hash Tag Format, where each word is Capitalized and Concatenated Together Without Spaces.
 * 
 *  If the length of the input string is greater than 280 characters or if the input string is empty or contains only Whitespace, the function should return false.
 * 
 *  Otherwise, the function should return the generated Hash Tag Prefixed with #
 */

// console.log(generateHash("My Name is Akash Aich"));
// output:  #MyNameIsAkashAich

const generateHash = (str) => {
    if(str.length > 280 || str.trim().length === 0){
        return false;
    }

    str = str.split(" ");
    str = str.map((currElem) => 
        currElem.replace(currElem[0], currElem[0].toUpperCase())
    );

    str = `#${str.join("")}`;
    console.log(str);
    return str;
}

console.log(generateHash("My name is Akash Aich"));