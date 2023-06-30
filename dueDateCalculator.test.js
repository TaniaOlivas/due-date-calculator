const dueDateCalculator = require('./dueDateCalculatorCopy');

test('Due Date is: ', () => {
  expect(dueDateCalculator(new Date('2023-06-29T18:12:00Z'), 8)).toStrictEqual(
    new Date('2023-07-11T18:12:00Z')
  );
});
