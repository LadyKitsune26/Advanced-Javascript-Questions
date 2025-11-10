/** Given an array along with a chunk size, return a new array that contains 
 * many subarrays where the length of each subarray is length `size`. 
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // Chat GPT Solution
// const arrayChunk = (array, size) => {
//   const chunked = [];

//   for (let i = 0; i < array.length; i += size) {
//     // Slice out a piece of the array of length 'size'
//     const chunk = array.slice(i, i + size);
//     chunked.push(chunk);
//   }

//   return chunked;
// };

// // // Chat GPT solution one liner
// const arrayChunk = (array, size) =>
//   array.reduce((acc, _, i) =>
//     i % size ? acc : [...acc, array.slice(i, i + size)], []);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// David's Solution First
const arrayChunk = (array, size) => {
  // creat an empty 'chunkedArray' to hold the subarrays
  const chunkedArray = [];

  // For each index in the array that is divisible by 'size
  for (let i = 0; i < array.length; i += size) {
    // Create a subarray of length 'size' that slices from the current index
    const subarray = array.slice(i, i + size);
    // Push this subasrray onto our 'chunkedArray'
    chunkedArray.push(subarray);
  }
  // Return 'chunkedArray'
  return chunkedArray;
};

module.exports = arrayChunk;
