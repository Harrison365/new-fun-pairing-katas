/*
  The orderVeg function should take a array of vegetables and return a new array in which the vegetables are sorted in ascending order according to quantity.
  e.g.
  orderVeg([
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Runner beans', type: 'legume', quantity: 8}
])
should return:
[
  {name: 'Broccoli', type: 'brassica', quantity: 1},
  {name: 'Onion', type: 'bulb', quantity: 3},
  {name: 'Chard', type: 'leaf', quantity: 3},
  {name: 'Parsnip', type: 'root', quantity: 4},
  {name: 'Carrot', type: 'root', quantity: 5},
  {name: 'Runner beans', type: 'legume', quantity: 8}
]
*/

// function orderVeg(Arr) {
//   for (var i = 1; i < Arr.length; i++)
//     for (var j = 0; j < i; j++)
//       if (Arr[i].quantity < Arr[j].quantity) {
//         var x = Arr[i];
//         Arr[i] = Arr[j]; //doesnt mutate original due to new reference (because it is saved as the reference to the original not as the value)
//         Arr[j] = x;
//       }
//   return Arr;
// }

//OR!!!!!!

function orderVeg(Arr) {
  if (Arr.length === 1) {
    return Arr.slice();
  }
  const newArr = Arr.slice().sort((a, b) => a.quantity - b.quantity);

  return newArr;
}

console.log(orderVeg([{ name: "Broccoli", type: "brassica", quantity: 1 }]));

module.exports = { orderVeg };
