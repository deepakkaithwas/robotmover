const readline = require("readline");
const { getMethod } = require("./utils");
const { move, place, report, isPlaced, left, right } = require("./robot");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "ROBOT> "
});

rl.prompt();
rl.on("line", line => {
  if (line) {
    const { method, args } = getMethod(line);
    switch (method.trim().toLowerCase()) {
      case "place":
        place(args);
        break;
      case "move":
        if (isPlaced()) {
          move();
        }
        break;
      case "left":
        if (isPlaced()) {
          left();
        }
        break;
      case "right":
        if (isPlaced()) {
          right();
        }
        break;
      case "report":
        if (isPlaced()) {
          console.log(report());
        }
        break;
      case "left":
        if (isPlaced()) {
          left();
        }
        break;
      case "right":
        if (isPlaced()) {
          right();
        }
        break;
      default:
        console.log(`Please provide a valid method '${line.trim()}'`);
        break;
    }
  }
  rl.prompt();
}).on("close", () => {
  console.log("Have a great day!");
  process.exit(0);
});
