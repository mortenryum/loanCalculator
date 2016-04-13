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
import s from './LoanCalculator.scss';
import MonthlyPaymentBox from '../MonthlyPaymentBox';

class LoanCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }

  tick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className={s.derp}>
        <MonthlyPaymentBox />
        <p>{this.state.count}</p>
        <a onClick={this.tick}>Click me</a>
      </div>
    );
  }

}

export default withStyles(LoanCalculator, s);
