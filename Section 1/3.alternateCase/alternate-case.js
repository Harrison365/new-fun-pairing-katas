/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  let alternatingString = "";
  // start with a capital letter
  let toUpper = true;
  for (letter of str) {
    alternatingString += toUpper ? letter.toUpperCase() : letter.toLowerCase();
    // if letter wasn't a space then toggle toUpper
    if (letter !== " ") toUpper = !toUpper;
  }
  return alternatingString;
}

module.exports = alternateCase;
