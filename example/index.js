// Dependencies
var Vowels = require("../lib");

console.log(Vowels());
// => [ 'a', 'e', 'i', 'o', 'u' ]

console.log(Vowels(false));
// => [ 'a', 'e', 'i', 'o', 'u' ]

console.log(Vowels(true,3));
// Array of 3 random vowels

console.log(Vowels(true,8));
// Array of 8 random vowels
