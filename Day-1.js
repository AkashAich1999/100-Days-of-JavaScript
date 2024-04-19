// Longest Word in a String

/**  
 * Q1. Write a function to Find Longest Word that takes a string as input & returns the Longest Word in the String. 
 * If there are multiple longest words, return the first one encountered.
 */

/** 
 * Constraints:
 * The input string may contain Alphabetic Characters, Digits, Spaces, & Punctuation. 
 * The input string is Non-Empty.
 * The input string may contain Multiple Words separated by Spaces.
*/ 

/**
 * Note:
 * If the input string is Empty or contains only Whitespace, the function should return as false. 
 * The function should ignore leading & trailing Whitespace when Determining the Longest Word.
 */

const findLongestWord = (str) => {
    if(str.trim().length === 0){
        return false;
    }

    words = str.split(" ");
    words = words.sort((a, b) => b.length - a.length);
    // console.log(words);
    return words[0];
}

console.log(
    findLongestWord("Watch Thapa Technical JavaScript course on youtube")
);

