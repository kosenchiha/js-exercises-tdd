function secondLargest(arr) {
  var copyArr = arr.slice();
  copyArr.sort((a, b) => b - a);
  return copyArr[1];
}

module.exports = secondLargest;
