/*
  The function sumAscii should take an array of names and calculate each name's score based on the total of each character's lowercase ASCII value. It should return the name with the highest score.
  E.g. the name 'John' would get the score 431 because 'j' has the ASCII code 106, 'o' has the ASCII code 111, 'h' has the ASCII code 104 and 'n' has the ASCII code 110.
*/

function sumAscii(names) {
  let maxScore = 0;
  let maxName = "";

  for (let i = 0; i < names.length; i++) {
    let score = 0;
    for (let j = 0; j < names[i].length; j++) {
      score += names[i].toLowerCase().charCodeAt(j);
    }
    if (score > maxScore) {
      maxScore = score;
      maxName = names[i];
    }
  }

  return maxName.replace(/\s/g, "");
}

module.exports = sumAscii;
