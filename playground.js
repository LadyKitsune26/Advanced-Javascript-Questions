const arr = [1, -1, 2, 3];

// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

//a = 1, c = -1 => a = 0
//a = 0, c = 2 => a = 2
//a = 2, c = 3 => a = 5

const sum = arr.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // 5