const repeat = require("./repeate");

test("repeat 'a' 5 times", () => {
  expect(repeat("a", 5)).toBe("aaaaa");
});
