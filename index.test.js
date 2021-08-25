import { hello } from './index';

jest.mock('./index', () => ({
    __esModule : true,
    hello : jest.fn(),
}));

it("should be something", () => {
    hello.mockImplementation(() => "a");

    expect(hello()).toBe("a");
});

it("should be something else", () => {
    hello.mockImplementation(() => "b");

    expect(hello()).toBe("b");
});
