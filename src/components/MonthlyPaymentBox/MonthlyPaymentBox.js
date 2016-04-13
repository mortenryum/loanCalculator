/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MonthlyPaymentBox.scss';

function MonthlyPaymentBox() {
  return (
    <div>
      <h2>Monthly payment</h2>
      <p>16 311 kr</p>
    </div>
  );
}

export default withStyles(MonthlyPaymentBox, s);
