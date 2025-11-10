/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */



// // Chat GPT Solution
// const maxCharacter = (str) => {
//   const charCount = {};

//   // Step 1: Count the occurrences of each character
//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   // Step 2: Find the character with the maximum count
//   let maxChar = '';
//   let maxCount = 0;

//   for (const char in charCount) {
//     if (charCount[char] > maxCount) {
//       maxChar = char;
//       maxCount = charCount[char];
//     }
//   }

//   return maxChar;
// };

// Chat GPT Solution one liner
// const maxCharacter = (str) =>
//   [...str].reduce((a, c, i, arr) =>
//     arr.filter((x) => x === c).length > arr.filter((x) => x === a).length
//       ? c
//       : a
//   );

//Chart GPT clean efficient solution
// const maxCharacter = (str) =>
//   Object.entries(
//     [...str].reduce((a, c) => ((a[c] = (a[c] || 0) + 1), a), {})
//   ).reduce((a, c) => (c[1] > a[1] ? c : a))[0];


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// //David's 1st Solution
// const maxCharacter = (str) => {
//   const charMap = {};
//   let max = 0;
//   let maxChar = "";

//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// };

// David's 2nd Solution 
// const maxCharacter = (str) => {
//   const charMap = new Map();
//   let max = 0;
//   let maxChar = "";

//   for (const char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   for (const char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// };


//Dvaid 's 3rd Solution best practice 
const maxCharacter = (str) => {
  const charMap = new Map();
  let max = 0;
  let maxChar = "";

  for (const char of str) {
    charMap.set(char, charMap.get(char) + 1 || 1);
  }

  for (const [char, count] of charMap) {
    if (count > max) {
        max = count;
        maxChar = char;
    }
  }

  return maxChar;
};

module.exports = maxCharacter;
