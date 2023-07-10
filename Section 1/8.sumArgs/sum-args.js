/* The function sumArgs should accept any number of arguments, and add them together. If given one argument, it should return that. If it is not given arguments, it should return 0 */

function sumArgs(...args) {
  sum = args.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
//^^^ REDUCE METHOD ^^^
//Reduce takes callback function and initial value.
//Callback takes accumulator and current value.
//Initial value = accumulator starting value.
//Callback function executed for each element in array.
//The return value of callback function becomes new value of accumulator.
//Reduce function returns the final value of accumulator.

module.exports = sumArgs;
