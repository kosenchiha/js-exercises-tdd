// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

//       METHOD-1
// function factorial(int) {
//   //using recurcion
//   if (int === 0) {
//     return 1;
//   } else {
//     return int * factorial(int - 1);
//   }
// }

//       METHOD-2
function factorial(int) {
  var res = 1;
  if (int === 0) {
    return res;
  } else {
    for (i = 1; i <= int; i++) {
      res = res * i;
    }
    return res;
  }
}

module.exports = factorial;
