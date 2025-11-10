/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Chat GPT Solution long method
// const capitalize = (str) => {
//   // Step 1: split sentence into words
//   const words = str.split(' ');

//   // Step 2: capitalize each word
//   const capitalizedWords = words.map(word => 
//     word.charAt(0).toUpperCase() + word.slice(1)
//   );

//   // Step 3: join words back together
//   return capitalizedWords.join(' ');
// };

// // Chat GPT one liner solution
// const capitalize = str =>
//   str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// David's Solution First Attempt
// const capitalize = (str) => {
//   const result = [];
//   for (let word of str.split(" ")) {
//     const capitalizedWord = word[0].toUpperCase() + word.slice(1);
//     result.push(capitalizedWord);
//   }
//   return result.join(" ");
// };

// David's Solution Brute Force
const capitalize = (str) => {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};

module.exports = capitalize;
