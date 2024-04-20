// Question 6 - String is Palindrome or Not.

/**
 *  Write a function to Determine whether a given string is Palindrome or Not.
 *
 *  A Palindrome is a Word, Phrase, Number, or Other Sequence of Characters that reads the same forward & backward, ignoring Spaces, Punctuation, and Capitalization.
 *  
 *  console.log(isPalindrome("A man, a plan, a canal, Panama"));  // output: true
 *  console.log(isPalindrome("racecar"));  // output: true
 *  console.log(isPalindrome("hello"));  // output: false
 *
 *  Constraints:
 *  The input string may contain Letters, Digits, Spaces, Punctuation, and Special Characters.
 *  The function should be case-insensitive, meaning "Racecar" & "racecar" should be considered the same.
 *  Ignore Spaces, Punctuation, and Special Characters When Determining if a string is Palindrome or Not. 
 *  The function should return True if the input string is a Palindrome or False Otherwise. 
 */

const isPalindrome = (str) => {
    str = str.toLowerCase().replace(/\W/g, "");
    console.log(str);
    let r_str = str.split("").reverse().join("");
    console.log(r_str);
    return str === r_str ? true: false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));  // output: true
console.log(isPalindrome("racecar"));  // output: true
console.log(isPalindrome("hello"));  // output: false

