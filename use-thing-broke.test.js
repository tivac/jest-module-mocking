import { initialize } from "./use-thing";

jest.mock("./make-thing.js", () => ({
    makeThing : jest.fn(),
}));

import { makeThing } from "./make-thing";

describe("thing", () => {
  it("should resolve with value", async () => {
    makeThing.mockImplementation(() => ({
      get: () => new Promise((r) => r("correct value"))
    }));

    const value = await initialize();

    await expect(value).toStrictEqual("correct value");
  });
});
