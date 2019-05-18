function paintShop(cars, newColour) {
  var carsCopy = new Array();
  cars.forEach(function(car) {
    carsCopy.push(Object.assign({}, car));
  });

  carsCopy.forEach(el => {
    if (el.colour === "Red") {
      el.colour = newColour;
    }
  });

  return carsCopy;
}

module.exports = paintShop;
