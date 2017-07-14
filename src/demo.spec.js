/**
 * A function to do sum
 * @param {Number} a - first number
 * @param {Number} b - second number
 * @return {Number} a sum of a & b
 */
function sum(a, b) {
  return a+b;
}

it('should sum', () => {
  expect(sum(3, 4)).toBe(8);
});
