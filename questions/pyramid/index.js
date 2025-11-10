/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step 
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // Chat GPT solution most readable
// const pyramid = (n) => {
//   const totalCols = 2 * n - 1;
//   const midpoint = Math.floor(totalCols / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let col = 0; col < totalCols; col++) {
//       if (midpoint - row <= col && col <= midpoint + row) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// };

// // Chat GPT solution recursive version
// const pyramid = (n, row = 0, level = "") => {
//   const totalCols = 2 * n - 1;
//   const midpoint = Math.floor(totalCols / 2);

//   if (row === n) return;

//   if (level.length === totalCols) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const addChar =
//     midpoint - row <= level.length && level.length <= midpoint + row
//       ? "#"
//       : " ";

//   pyramid(n, row, level + addChar);
// };




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // David's solution
const pyramid = (n) => {
  const columnWidth = 2 * n - 1;
  const middle = Math.floor(columnWidth / 2);

  for (let row = 0; row < n; ++row) {
    let step = "";

    for (let column = 0; column < columnWidth; ++column) {
      if (column >= middle - row && column <= middle + row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
};

module.exports = pyramid;
