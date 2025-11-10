// const arr = [1, -1, 2, 3];

// const stringifyId = require("./questions/stringifyId");

// // a = 0, c = 1 => a = 1
// // a = 1, c = -1 => a = 0
// // a = 0, c = 2 => a = 2
// // a = 2, c = 3 => a = 5

// //a = 1, c = -1 => a = 0
// //a = 0, c = 2 => a = 2
// //a = 2, c = 3 => a = 5

// const sum = arr.reduce((accumulator, current) => accumulator + current, 0);

// console.log(sum); // 5



//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // stringifyId //

// const arr = [1, 2, 3, 3, 4, 5, 5, 5, 5];

// const uniqueArr = [...new Set(arr)];

// console.log(uniqueArr); // [1, 2, 3, 4, 5]


//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // maxCharacter //
// const str = "Simplified";
// const charMap = {};

// for (let char of str) {
//   charMap[char] = charMap[char] + 1 || 1;
// }

// console.log(charMap);



// // // more maxCharacter code 
// const str = "Simplified";
// const charMap = new Map();

// for (const char of str) {
//  const count = charMap.get(char);
//  charMap.set(char, count + 1 || 1);
// }

// for (const [char, count] of charMap) {
//     console.log(char, count);
// }



// console.log(charMap)



// // // More code maxCharacter
// const arr = [1, 2, 3]
// const [first, second, thrid] = arr;

// console.log(first, second, thrid);


////////////////////////////////////////////////////////////////////////////////////////////////////////////


// // // Anagrams // //
// const catsMap = new Map();

// catsMap.set("c", 1);
// catsMap.set("a", 1);
// catsMap.set("t", 1);
// catsMap.set("s", 1);

// console.log(catsMap.size); // 4


// // more anagrams code
// console.log("A B C".replace("", "")); // ABC


// // // more anagrams code
// const strA = "cat";
// const strB = "act";

// console.log(strA.split("").sort().join("") === strB.split("").sort().join("")); // true


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

