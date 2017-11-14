const main = require('./main');

describe('Main', () => {
  it('should extend "airbnb"', () => {
    expect(main.extends).toEqual('airbnb');
  });
});
