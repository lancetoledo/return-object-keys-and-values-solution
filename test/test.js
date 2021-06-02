const expect = chai.expect,
  testobj = { a: "Apple", b: "Microsoft", c: "Google" };
describe('Return Object Keys and Values', () => {
  it('Return the keys and values of an object', () => {
    expect(keysAndValues(testobj)).to.eql(
      [["a", "b", "c"], ["Apple", "Microsoft", "Google"]],
      'Please check your function!'
    );
  });
});
