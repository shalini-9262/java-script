// console.log(3 < 1);
// console.log(3 <= 2);
// console.log(3 == 2);
// console.log(3 != 2);
// console.log(3 > 2);

// console.log("3" > 2);
// console.log("03" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/* The reason is that an equality check == and comparisions > < >= <= work differenty.
comparisions convert null to a number, treating it as 0.
That's why(3) null >= 0 is true and (1)null > 0 is false */

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);
// console.log(undefined >= 0);

// === 

console.log("3" === 3);