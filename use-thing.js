const { makeThing } = require("./make-thing");

const thing = makeThing();

const initialize = async () => {
  const value = await thing.get();

  console.log(value);

  return value;
};

module.exports = { initialize };
