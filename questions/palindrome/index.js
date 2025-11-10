/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Chat GPT Solution
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');
// return str === reversed;
// };

// function palindrome(str) {
//   const arr = str.split('');
//   return arr.every((char, i) => char === arr[arr.length - 1 - i]);
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // David's Solution
const palindrome = (str) => {
  const middle = Math.floor(str.length / 2);
  for (let i = 0; i < middle; i++) {
    const oppositeIndex = str.length - 1 - i;
    if (str[i] !== str[oppositeIndex]) {
      return false;
    }
  }
  return true;
};

module.exports = palindrome;
