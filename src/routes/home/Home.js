/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import LoanCalculator from '../../components/LoanCalculator';

const title = 'BankRyum | Lånekalkulator';

function Home(props, context) {
  context.setTitle(title);
  return (
    <LoanCalculator />
  );
}

Home.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(Home, s);
