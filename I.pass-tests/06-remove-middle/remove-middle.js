function removeMiddle(arreyOfWords) {
  var indexOfRemovedElement = Math.floor(arreyOfWords.length / 2);
  return arreyOfWords.splice(indexOfRemovedElement, 1);
}

module.exports = removeMiddle;
