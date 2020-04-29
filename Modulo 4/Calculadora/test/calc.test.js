const calc = require("../calc");

describe("Caculator", () => {
  describe("Sum", () => {
    it("Return 3 when 2 plus 1", () => {
      const num1 = 2;
      const num2 = 1;

      const result = 3;

      expect(calc.sum(num1, num2)).toBe(result);
    });
  });
  describe("Subtraction", () => {
    it("Returns 1 when 2 minus 1", () => {
      const num1 = 2;
      const num2 = 1;

      const result = 1;

      expect(calc.sub(num1, num2)).toBe(result);
    });
  });
  describe("Multiplication", () => {
    it("Return 2 when 2 times 1", () => {
      const num1 = 2;
      const num2 = 1;

      const result = 2;

      expect(calc.mult(num1, num2)).toBe(result);
    });
  });
  describe("Division", () => {
    it("Returns 1 when 2 divided by 2", () => {
      const num1 = 2;
      const num2 = 2;

      const result = 1;

      expect(calc.div(num1, num2)).toBe(result);
    });
    it("Returns 0 when division by 0", () => {
      const num1 = 2;
      const num2 = 0;

      const result = 0;

      expect(calc.div(num1, num2)).toBe(result);
    });
  });
});
