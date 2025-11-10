/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate 
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // Chat GPT solution #1
// const steps = (n) => {
//   for (let row = 1; row <= n; row++) {
//     const hashes = '#'.repeat(row);
//     const spaces = ' '.repeat(n - row);
//     console.log(hashes + spaces);
//   }
// };

// // Chat GPT solution recursive
// const steps = (n, row = 0, stair = '') => {
//   // Base case: if we've completed all rows, stop
//   if (row === n) return;

//   // If the current "stair" string is complete (length == n)
//   if (stair.length === n) {
//     console.log(stair);          // print the current row
//     return steps(n, row + 1);    // move to the next row
//   }

//   // Build the current stair string
//   const addChar = stair.length <= row ? '#' : ' ';
//   steps(n, row, stair + addChar);
// };


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // David's solution
const steps = (n) => {
    for (let row = 0; row < n; ++row) {
        let step = '';
        for (let column = 0; column < n; ++column) {
            if (column <= row) {
                step += '#';
            }
            else {
                step += ' ';
            }
        }
        console.log(step);
    }
}

module.exports = steps;
