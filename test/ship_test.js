var expect = require("chai").expect;

describe("checkShip", () => {
  let checkShip = require("../game_logic/ship_methods").checkShip;
  it("should be able to report a no ship at a given coordinate ", () => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    expect(checkShip(player, [9, 9])).to.be.false;
  });

  //2nd unit test

  it("should be able to correctly report a ship at a given coordinate ", () => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
    expect(checkShip(player, [0, 0])).to.be.true;
  });

  //3rd unit test
  it("should be able to correctly report a ship at more than one coordinate ", () => {
    player = {
      ships: [
        {
          locations: [
            [0, 0],
            [0, 1],
          ],
        },
      ],
    };
    expect(checkShip(player, [0, 0])).to.be.true;
    expect(checkShip(player, [0, 1])).to.be.true;
  });

  //4th unit test
  it("should be able to report about multiple ships", () => {
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
    expect(checkShip(player, [0, 0])).to.be.true;
    expect(checkShip(player, [0, 1])).to.be.true;
    expect(checkShip(player, [1, 0])).to.be.true;
  });
});
