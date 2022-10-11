var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

for (var i = 1; i < Arr.length; i++)
  for (var j = 0; j < i; j++)
    if (Arr[i] < Arr[j]) {
      var x = Arr[i]; //x is set to the value of Arr[i]
      Arr[i] = Arr[j]; //Arr[i] is set to the value off Arr[j] but not altering x as Arr[i] is a value not a reference.
      Arr[j] = x;
    }

//value vs reference
let a = "a";
let b = "a";
a = "c";
//b still equals a because it set to the value not the reference of a

console.log(b);
