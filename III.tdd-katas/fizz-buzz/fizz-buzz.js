/////    Step 1

// function fizzbuzz(n) {
//   var result = [];
//   for (i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       result.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       result.push("Fizz");
//     } else if (i % 5 === 0) {
//       result.push("Buzz");
//     } else {
//       result.push(i);
//     }
//   }
//   return result.join(", ");
// }

//     Step 2
function fizzbuzz(n) {
  var result = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0 || i.toString().includes("3")) {
      result.push("Fizz");
    } else if (i % 5 === 0 || i.toString().includes("5")) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result.join(", ");
}
module.exports = fizzbuzz;
