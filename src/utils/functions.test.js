import convertUnix from './functions';

describe('convert unix', () => {
  test('this converts unix to a proper date', () => {
    const input = 1655255296;
    const returnVal = convertUnix(input);

    expect(returnVal).toEqual('6/14/2022');
  });
});
