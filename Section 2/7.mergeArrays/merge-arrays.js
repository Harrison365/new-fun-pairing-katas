/*
  The function mergeArrays should take 2 arrays and merges them into one array, taking one item from each array at a time.
  If the arrays are of uneven length, then simply continue adding elements from the longest array onto the end of the merged array.
  E.g. [1, 2, 3] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c']
  [1, 2, 3, 4, 5] and ['a', 'b', 'c'] --> [1, 'a', 2, 'b', 3, 'c', 4, 5]
*/

function mergeArrays(arr1, arr2) {
let alternator = 1;
let merged = [];

let longest = arr1;

if( arr1.length < arr2.length){
  longest = arr2}

for (i = 0; i < longest.length; i++){
if (alternator === 1){
  if(arr1[i] !== undefined){
merged.push(arr1[i]) }
alternator *= -1 ;
} if (alternator === -1 ){
   if(arr2[i] !== undefined){
  merged.push(arr2[i])
   }
  alternator *= -1 ;
}
}
return merged;
}
// console.log(mergeArrays([1, 2, 3], ['a', 'b', 'c']))
// console.log(mergeArrays([1, 2], ['a', 'b', 'c', 'd']))
console.log(mergeArrays(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3]))
module.exports = mergeArrays;
