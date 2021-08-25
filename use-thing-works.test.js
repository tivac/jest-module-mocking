import { initialize } from "./use-thing";
// import { makeThing } from "./make-thing";

jest.mock("./make-thing.js", () => ({
    makeThing : () => ({
        get: () => new Promise((r) => r("correct value")),
    }),
}));

describe("thing", () => {
  it("should resolve with value", async () => {
    // makeThing.mockImplementation(() => ({
    //   get: () => new Promise((r) => r("correct value"))
    // }));

    const value = await initialize();

    await expect(value).toStrictEqual("correct value");
  });
});
