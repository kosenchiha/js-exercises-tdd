function largerThan(array) {
  return array.filter(number => {
    return number > 10;
  });
}

module.exports = largerThan;

console.log(largerThan([4, 10, 32, 9, 21]));
