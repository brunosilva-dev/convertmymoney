const convert = require('./convert')

test('converts 4 to 4', () => {
  expect(convert.convert(4, 4)).toBe(16)
})