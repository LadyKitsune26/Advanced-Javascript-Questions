/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // ChatGPT solution
// function stringifyId(arr) {
//   // Step 1: Extract all IDs
//   const ids = arr.map(obj => obj.id);

//   // Step 2: Remove duplicates using Set
//   const uniqueIds = [...new Set(ids)];

//   // Step 3: Join them into a string
//   return uniqueIds.join(', ');
// }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // David's methods...

// Method without Set
// const stringifyId = (arr) => {
//   const idArray = arr.map(obj => obj.id);
//   const uniqueArray = [];
//   let idString = "";

//   for (let id of idArray) {
//     if (!uniqueArray.includes(id)) {
//       uniqueArray.push(id);
//     }
//   }

//   for (let i = 0; i < uniqueArray.length; ++i) {
//     if (i !== uniqueArray.length - 1) {
//         idString += `${uniqueArray[i]}, `;
//     }
//     else {
//         idString += uniqueArray[i];
//     }
//   }

//   return idString;
// };



// Final method long version
// const stringifyId = (arr) => {
//   const idArray = arr.map(obj => obj.id);
//   const uniqueArray = [];
//   let idString = "";

//   for (let id of idArray) {
//     if (!uniqueArray.includes(id)) {
//       uniqueArray.push(id);
//     }
//   }

//   for (let i = 0; i < uniqueArray.length; ++i) {
//     idString += `${uniqueArray[i]}, `;
//   }

//   return idString.slice (0, idString.length - 2);
// };



// Final method short version
// const stringifyId = (arr) => {
//   const idArray = arr.map(obj => obj.id);
//   const uniqueArray = [];

//   for (let id of idArray) {
//     if (!uniqueArray.includes(id)) {
//       uniqueArray.push(id);
//     }
//   }

//   return uniqueArray.join(', ');
// };



// Final method using Set top technique
const stringifyId = (arr) => {
  const idArray = arr.map(obj => obj.id);
  const uniqueArray = [...new Set(idArray)];
    return uniqueArray.join(', ');
};

module.exports = stringifyId;
