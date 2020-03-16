const getMethod = line => {
  if (line) {
    const words = line.split(" ");
    const args = words[1] && words[1].split(",");
    return { method: words[0], ...(!!args && { args }) };
  }
};

module.exports = {
  getMethod
};
