const { getMethod } = require("./utils");

describe("getMethod()", () => {
  it("should return undefined if called without arugments", () => {
    expect(getMethod()).toBeUndefined();
  });
  it("should return object with method name when method passed as string", () => {
    const obj = {
      method: "move"
    };
    expect(getMethod("move")).toEqual(obj);
  });
  it("should return object with method name and argument when method passed as string", () => {
    const obj = {
      method: "move",
      args: ["1", "2", "north"]
    };
    expect(getMethod("move 1,2,north")).toEqual(obj);
  });
});
