const checkShip = (player, coordinate) => {
  let shipPresent, ship;
  for (let i = 0; i < player.ships.length; i++) {
    ship = player.ships[i];

    shipPresent = ship.locations.filter((actualCoordinate) => {
      return (
        actualCoordinate[0] === coordinate[0] &&
        actualCoordinate[1] === coordinate[1]
      );
    })[0];

    if (shipPresent) {
      return true;
    }
  }
  return false;
};

module.exports.checkShip = checkShip;
