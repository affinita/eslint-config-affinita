/**
 * Copyright (c) 2017, Affinata. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const react = require('./react');

describe('React', () => {
  describe('react/sort-prop-types', () => {
    const rule = react.rules['react/sort-prop-types'];
    const ruleValue = rule[0];
    const ruleOptions = rule[1];

    it('it should be set to "error"', () => {
      expect(ruleValue).toEqual(2);
    });
    it('should have "callbacksLast" set to "false"', () => {
      expect(ruleOptions.callbacksLast).toEqual(false);
    });
    it('should have "ignoreCase" set to "true"', () => {
      expect(ruleOptions.ignoreCase).toEqual(true);
    });
    it('should have "requiredFirst" set to "true"', () => {
      expect(ruleOptions.requiredFirst).toEqual(true);
    });
  });
});
