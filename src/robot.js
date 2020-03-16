const possibleDirections = ["NORTH", "EAST", "SOUTH", "WEST"];
const roomParameters = [5, 5];
const robotPosition = [];
let currDir = 0;

const left = () => {
  currDir -= 1;
  if (currDir < 0) currDir = 3;
};
const right = () => {
  currDir += 1;
  if (currDir > 3) currDir = 0;
};
const move = () => {
  let x = 0,
    y = 0;
  switch (currDir) {
    case 0:
      y = 1;
      break;
    case 1:
      x = 1;
      break;
    case 2:
      y = -1;
      break;
    case 3:
      x = -1;
      break;
  }
  let newX = robotPosition[0] + x;
  let newY = robotPosition[1] + y;
  if (
    newX < 0 ||
    newY < 0 ||
    newX > roomParameters[0] - 1 ||
    newY > roomParameters[1] - 1
  ) {
    console.log("robot can not not go outside the room");
    return false;
  }
  robotPosition[0] = newX;
  robotPosition[1] = newY;
  return true;
};

const place = args => {
  if (!args || args.length < 3) {
    console.log("please provide proper value to place robot");
    return false;
  }
  if (
    Math.sign(args[0]) !== -1 &&
    args[0] < roomParameters[0] &&
    Math.sign(args[1]) !== -1 &&
    args[1] < roomParameters[1] &&
    possibleDirections.includes(args[2].toUpperCase())
  ) {
    robotPosition[0] = parseInt(args[0]);
    robotPosition[1] = parseInt(args[1]);
    currDir = possibleDirections.indexOf(args[2].toUpperCase());
  } else {
    console.log(
      "arguments provided are not valid, please provide a valid argument"
    );
    return false;
  }
  console.log(`Robot is placed at ${args[0]} ${args[1]} facing ${args[2]}`);
  return true;
};

const report = () => {
  return `${robotPosition[0]},${robotPosition[1]},${possibleDirections[currDir]}`;
};

const isPlaced = () => {
  if (robotPosition.length === 0) {
    console.log("Please place the robot first.");
    return false;
  }
  return true;
};

module.exports = {
  move,
  place,
  report,
  left,
  right,
  isPlaced
};
