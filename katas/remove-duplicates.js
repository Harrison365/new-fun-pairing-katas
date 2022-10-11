/*
  The function removeDuplicates should take an array and return a new array with any duplicate items removed. The original order should be maintained.
*/
//[1,2,3,3,4] -> [1,2,3,4]
//[3,3,3,5] -> [3,5]
//["a","hi","hola","a"] -> ["a","hi","hola"]

// function removeDuplicates(Arr) {
//   const newArr = [];
//   for (let i = 0; i < Arr.length; i++) {
//     if (Arr.indexOf(Arr[i]) === i) {
//       //indexOf finds the first index of the thing passed.
//       newArr.push(Arr[i]);
//     }
//   }
//   return newArr;
// }

// function removeDuplicates(Arr) {
//   const newArr = [];
//   for (let i = 0; i < Arr.length; i++) {
//     if (!newArr.includes(Arr[i])) {
//       newArr.push(Arr[i]);
//     }
//   }

//   return newArr;
// }

// function removeDuplicates(Arr) {
//   const unique = new Set(Arr);
//   console.log(unique);
//   const arrU = Array.from(unique);
//   return arrU;
// }

// function removeDuplicates(Arr) {
//   let dupChars = Arr.filter((element, index) => {
//     return Arr.indexOf(element) === index;
//   });
//   return dupChars;
// }

console.log(removeDuplicates(["a", "hi", "hola", "a"]));

module.exports = removeDuplicates;
