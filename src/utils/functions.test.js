import convertUnix from './functions';

describe('convert unix to numerical date', () => {
  test('this converts unix to a numerical date', () => {
    const input = 1655255296;
    const returnVal = convertUnix(input, false);

    expect(returnVal).toEqual('6/14/2022');
  });
});

describe('convert unix to a day of the week', () => {
  const input = 1655255296;
  const returnVal = convertUnix(input, true);

  expect(returnVal).toEqual('Tuesday');
});
