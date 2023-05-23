/*
  The function getCentury should take a year as a number and return the century.
  E.g. 1999 should return '20th'
  2004 should return '21st'
  1877 should return '19th'
  It should work up to and including the year 10,000 (the '101st' century)
*/

function getCentury(year) {
  let century = Math.floor(year / 100) + 1;
  let strCen = String(century);
  arr = strCen.split("");
  lastTwo = arr[arr.length - 2] + arr[arr.length - 1];

  let suffix;
  if (lastTwo === "11" || lastTwo === "12" || lastTwo === "13") {
    suffix = "th";
  } else if (arr[arr.length - 1] === "1") {
    suffix = "st";
  } else if (arr[arr.length - 1] === "2") {
    suffix = "nd";
  } else if (arr[arr.length - 1] === "3") {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  return century + suffix;
}

console.log(getCentury(100));
module.exports = getCentury;
