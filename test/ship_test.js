var expect = require("chai").expect;

describe("checkShip", () => {
  let checkShip = require("../game_logic/ship_methods").checkShip;

  let player;

  before(function(){
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
        {
          locations: [
            [1, 0],
            [1, 1],
          ],
        },
      ],
    };
  })

  it("should be able to report a no ship at a given coordinate ", () => {
   
    expect(checkShip(player, [9, 9])).to.be.false;
  });

  //2nd unit test

  it("should be able to correctly report a ship at a given coordinate ", () => {
    
    expect(checkShip(player, [0, 0])).to.be.true;
  });

  //3rd unit test
  it("should be able to correctly report a ship at more than one coordinate ", () => {
   
    expect(checkShip(player, [0, 0])).to.be.true;
    expect(checkShip(player, [0, 1])).to.be.true;
  });

  //4th unit test
  it("should be able to report about multiple ships", () => {
    expect(checkShip(player, [0, 0])).to.be.true;
    expect(checkShip(player, [0, 1])).to.be.true;
    expect(checkShip(player, [1, 0])).to.be.true;
  });
});

describe("damageShip", function () {
  var damageShip = require("../game_logic/ship_methods").damageShip;

  it("should report a damage on a given ship at a given location", function () {
    let ship = {
      locations: [[0, 0]],
      damage: [],
    };

    damageShip(ship,[0,0]);
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0,0]);
  });
});
