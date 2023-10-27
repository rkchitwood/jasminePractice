const test1 = {
  amount: 250000,
  years: 25,
  rate: 10,
};
const test2 = {
  amount: 100,
  years: 100,
  rate: 100,
};

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(test1)).toEqual('2271.75');
  expect(calculateMonthlyPayment(test2)).toEqual('8.33');
});

it("should return a result with 2 decimal places", function() {
  function twoDecimalPlaces(number) {
    return (number * 100 % 1 === 0);
  }

  expect(twoDecimalPlaces(calculateMonthlyPayment(test1))).toBe(true);
  expect(twoDecimalPlaces(calculateMonthlyPayment(test2))).toBe(true);
});