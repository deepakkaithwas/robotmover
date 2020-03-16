module.exports = Object.freeze({
  MESSAGES: {
    INCORRECT_COMMAND: "Please provide a valid command",
    APPLICATION_CLOSE: "Closing robot application",
    PROMPT: "ROBOTMOVER> ",
    MOVE_OUT_ERROR: "robot can not not go outside the room",
    PLACE_ERROR:
      "arguments provided are not valid, please provide a valid argument",
    PLACED_SUCCESS: args =>
      `Robot is placed at position X: ${args[0]} Y: ${args[1]} facing ${args[2]}`,
    ISPLACED_ERROR: "Please place the robot first."
  },
  ROBOT: {
    POSSIBLE_DIRECTION: ["NORTH", "EAST", "SOUTH", "WEST"]
  }
});
