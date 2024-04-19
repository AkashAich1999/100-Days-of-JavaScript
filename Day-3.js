// Question - 3 : Count Occurrences of Character

/**
 *  Task:
 *  Write a function called countChar that takes 2 parameters: a string & a character to count.
 *  The function should return the number of times the specified character appears in the string.
 *
 *  console.log(countChar("MissIssippi", "I"));  // Output: 4
 */

/**
 *  Todo Constraints:
 *  The function should be Case-Sensitive
 *  The function should handle both Lowercase & Uppercase Charatcters.
 *  The Character Parameter can be any Printable ASCII Character (the function should   accept any character that is part of the ASCII Character Set & is Printable).
 */

const countChar = (word, char) => {
    word = word.toLowerCase();
    char = char.toLowerCase();

    totalCount = word.split("").reduce((accum, currChar) => {
        if(currChar === char){
            accum++;
        }
        return accum;
    }, 0);
    return totalCount;
    // console.log(totalCount);
}

console.log(countChar("MissIssippi", "I"));