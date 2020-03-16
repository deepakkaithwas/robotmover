const robot = require("./robot");
const { isPlaced, move, place, left, right, report } = robot;

describe("isPlaced()", () => {
  it("should return false if robotPosition is empty", () => {
    expect(isPlaced()).toBe(false);
  });
  it("should return true if robotPosition has X and Y", () => {
    const robotPosition = robot.__get__("robotPosition");
    robotPosition[0] = 1;
    robotPosition[0] = 2;
    expect(isPlaced()).toBe(true);
  });
});

describe("left()", () => {
  it("should change currDir to 2, when currDir set to 3", () => {
    robot.__set__("currDir", 3);
    left();
    expect(robot.__get__("currDir")).toBe(2);
  });

  it("should change currDir to 3, when currDir set to 0", () => {
    robot.__set__("currDir", 0);
    left();
    expect(robot.__get__("currDir")).toBe(3);
  });
});
describe("right()", () => {
  it("should change currDir to 2, when currDir set to 1", () => {
    robot.__set__("currDir", 1);
    right();
    expect(robot.__get__("currDir")).toBe(2);
  });

  it("should change currDir to 3, when currDir set to 0", () => {
    robot.__set__("currDir", 3);
    right();
    expect(robot.__get__("currDir")).toBe(0);
  });
});

describe("report()", () => {
  it("should match text when robot position and direction is change", () => {
    const robotPosition = robot.__get__("robotPosition");
    robotPosition[0] = 1;
    robotPosition[1] = 2;
    robot.__set__("currDir", 0);
    expect(report()).toBe("1,2,NORTH");
  });
});

describe("place()", () => {
  it("should return false if called without parameter", () => {
    expect(place()).toBe(false);
  });
  it("should return false if called with array containing less then 3 value", () => {
    expect(place([1, 2])).toBe(false);
  });
  it("should return false if value of X is negative", () => {
    expect(place([-1, 3, "north"])).toBe(false);
  });
  it("should return false if value of Y is negative with string", () => {
    expect(place([1, "-3", "north"])).toBe(false);
  });
  it("should return false if value of Robot Position is not from the possibleDirections", () => {
    expect(place([1, 3, "eeshan"])).toBe(false);
  });
  it("should return true if all the arguments are correct", () => {
    expect(place([1, 3, "NORTH"])).toBe(true);
  });
});

describe("move()", () => {
  it("should return false if currDir is 2 and X and Y is 0", () => {
    const robotPosition = robot.__get__("robotPosition");
    robotPosition[0] = 0;
    robotPosition[1] = 0;
    robot.__set__("currDir", 2);
    expect(move()).toBe(false);
  });
  it("should return false if currDir is 0 and X is 0 and Y is 5", () => {
    const robotPosition = robot.__get__("robotPosition");
    robotPosition[0] = 0;
    robotPosition[1] = 5;
    robot.__set__("currDir", 0);
    expect(move()).toBe(false);
  });
  it("should return true if currDir is 0 and X is 1 and Y is 1", () => {
    const robotPosition = robot.__get__("robotPosition");
    robotPosition[0] = 1;
    robotPosition[1] = 1;
    robot.__set__("currDir", 0);
    expect(move()).toBe(true);
  });
  it("should set the value of Y to 2 if currDir is 0 and X is 1 and Y is 1", () => {
    const robotPosition = robot.__get__("robotPosition");
    robotPosition[0] = 1;
    robotPosition[1] = 1;
    robot.__set__("currDir", 0);
    move();
    expect(robotPosition[1]).toBe(2);
  });

  it("should change the value of X to 2 if currDir is 1 and X is 1 and Y is 1", () => {
    const robotPosition = robot.__get__("robotPosition");
    robotPosition[0] = 1;
    robotPosition[1] = 1;
    robot.__set__("currDir", 1);
    move();
    expect(robotPosition[0]).toBe(2);
  });
  it("should change the value of X to 1 if currDir is 3 and X is 2 and Y is 1", () => {
    const robotPosition = robot.__get__("robotPosition");
    robotPosition[0] = 2;
    robotPosition[1] = 1;
    robot.__set__("currDir", 3);
    move();
    expect(robotPosition[0]).toBe(1);
  });
});
