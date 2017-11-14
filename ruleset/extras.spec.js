const extras = require('./extras');

describe('Extras', () => {
  it('should have the plugin "extra-rules" applied', () => {
    expect(extras.plugins).toEqual((expect.arrayContaining(['extra-rules'])));
  });
  it('should have "no-commented-out-code" set to "error"', () => {
    expect(extras.rules['extra-rules/no-commented-out-code']).toEqual(2);
  });
  it('should have "no-single-line-objects" set to "warning"', () => {
    expect(extras.rules['extra-rules/no-single-line-objects']).toEqual(1);
  });
  it('should have "potential-point-free" set to "warning"', () => {
    expect(extras.rules['extra-rules/potential-point-free']).toEqual(1);
  });
});
