const enhancer = require("./enhancer.js");
// test away!

const superDab = {
  name: "Super Dab",
  durability: 43,
  enhancement: 6
};

const rockOfTheMilly = {
  name: "Rock of The Milly",
  durability: 100,
  enhancement: 7
};

const brandNewGuitar = {
  name: "Brand New Guitar",
  durability: 68,
  enhancement: 20
};

const teacupOfTears = {
  name: "Teacup of Tears",
  durability: 12,
  enhancement: 14
};

describe("enhancer.js", () => {
  describe("enhancer", () => {
    //REPAIR
    it("should return a new item with the durability === 100", () => {
      expect(enhancer.repair(superDab)).toEqual({
        ...superDab,
        durability: 100
      });
      expect(enhancer.repair(rockOfTheMilly)).toEqual({
        ...rockOfTheMilly,
        durability: 100
      });
    });
    //SUCCEED
    it("should enhance if succeeds", () => {
      expect(enhancer.succeed(brandNewGuitar)).toEqual(brandNewGuitar);
      expect(enhancer.succeed(teacupOfTears)).toEqual({
        ...teacupOfTears,
        enhancement: 15
      });
    });

    //Todos
    // it.todo("should enhance if succeeds");
    it.todo("should fail to enhance");
  });
});
