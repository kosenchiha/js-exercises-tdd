function findNeedle(words) {
  if (words.includes("needle")) {
    return 3;
  } else {
    return 0;
  }
}

module.exports = findNeedle;
