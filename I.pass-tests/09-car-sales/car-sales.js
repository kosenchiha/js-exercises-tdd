function sales(carsSold) {
  var result = new Object();
  carsSold.forEach(function(element) {
    var resultKeys = Object.keys(result);
    if (!resultKeys.includes(element.make)) {
      result[element.make] = element.price;
    } else {
      result[element.make] = result[element.make] + element.price;
    }
  });

  return result;
}

module.exports = sales;
