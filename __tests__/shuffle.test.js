const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  test('return an array', () => {
    expect(shuffle()).toBeInstanceOf(Array)
  })

  test('return an array of the same length as the argument sent in', () => {
  expect(shuffle([1, 2])).toHaveLength(2)
  })
});
