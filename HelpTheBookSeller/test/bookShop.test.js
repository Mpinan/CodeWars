const stockList = require("../src/bookSeller");

describe("stockList", () => {
  test("return a filter A", () => {
    expect(stockList(["ABAR 200"], ["A"])).toEqual("(A : 200)");
  });
});
