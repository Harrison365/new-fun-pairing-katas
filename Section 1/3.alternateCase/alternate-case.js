/*
  the alternateCase function should take a string and return a string.
  Every other letter either capital or lower case, starting with a capital letter.
  
  'hello' would become 'HeLlO'
  'hello world' would become 'HeLlO wOrLd'
*/

function alternateCase(str) {
  let alternatingString = "";
  let toUpper = true;

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (toUpper) {
      alternatingString += letter.toUpperCase();
    } else {
      alternatingString += letter.toLowerCase();
    }

    if (letter !== " ") {
      toUpper = !toUpper;
    }
  }

  return alternatingString;
}

module.exports = alternateCase;
