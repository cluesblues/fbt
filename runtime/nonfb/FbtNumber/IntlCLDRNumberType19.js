/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @generated SignedSource<<810e9de05c1e428c291eff1ee73e5759>>
 *
 * Generated by LanguageCLDRGenScript
 *
 * @flow strict
 */

'use strict';

const IntlVariations = require('IntlVariations');

const IntlCLDRNumberType19 = {
  getVariation(n /*: number */) /*: $Values<typeof IntlVariations> */ {
    if (n === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n === 0 || n !== 1 && n % 100 >= 1 && n % 100 <= 19) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType19;