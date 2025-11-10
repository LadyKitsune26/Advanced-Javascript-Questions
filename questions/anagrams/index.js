/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */


// // // Chat GPT Solution
// const anagrams = (strA, strB) => {
//   // Step 1: helper to build a frequency map
//   const buildCharMap = (str) => {
//     const map = {};

//     for (const char of str.replace(/\s/g, "").toLowerCase()) {
//       map[char] = (map[char] || 0) + 1;
//     }
//     return map;
//   };

//   // Step 2: create maps for both strings
//   const aMap = buildCharMap(strA);
//   const bMap = buildCharMap(strB);

//   // Step 3: quick length check
//   if (Object.keys(aMap).length !== Object.keys(bMap).length) return false;

//   // Step 4: compare character counts
//   for (const char in aMap) {
//     if (aMap[char] !== bMap[char]) return false;
//   }

//   return true;
// };


// // // Chat GPT Solution one liner
// const anagrams = (strA, strB) =>
//   strA.replace(/\s/g, "").toLowerCase().split("").sort().join("") ===
//   strB.replace(/\s/g, "").toLowerCase().split("").sort().join("");


////////////////////////////////////////////////////////////////////////////////////////////////////


// David's first solution
// const anagrams = (strA, strB) => {
//   const charMapA = buildCharMap(strA);
//   const charMapB = buildCharMap(strB);

//   if (charMapA.size !== charMapB.size) {
//     return false;
//   }

//   for (const [charA, countA] of charMapA) {
//     if (charMapB.get(charA) !== countA) {
//         return false
//     };
//   }

//   return true;
// };

// const buildCharMap = (str) => {
//   const charMap = new Map();

//   for (const char of removeSpaceAndLowerCase(str)) {
//     charMap.set(char, charMap.get(char) + 1 || 1);
//   }

//   return charMap;
// };

// // this function removes spaces and converts to lower case
// const removeSpaceAndLowerCase = (str) => {
//   return str.toLowerCase().replaceAll(" ", "");
// };



// // David's second solution industry standard
const anagrams = (strA, strB) => {
  // set both string to lower case
  // remove spaces
  return cleanString(strA) === cleanString(strB);
};

const cleanString = (str) => {
    return str.toLowerCase().replaceAll(" ", "").split("").sort().join("")
}

module.exports = anagrams;
