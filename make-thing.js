const makeThing = () => {
    const get = () =>
      new Promise((resolve) => {
        resolve("Here is a value");
      });
  
    return {
      get
    };
  };
  
module.exports = { makeThing };
  