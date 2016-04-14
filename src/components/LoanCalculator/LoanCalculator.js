import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LoanCalculator.scss';
import AmountBox from './AmountBox';
import YearsBox from './YearsBox';
import InterestBox from './InterestBox';
import underscore from 'underscore';

const DEFAULT_AMOUNT = 25600000; // 2 560 000 million NOK
const DEFAULT_INTEREST_RATE = 3.45; // 3,45% interest rate
const DEFAULT_YEARS = 20; // 20 years of down payment

const DEBOUNCE_DELAY = 300;

class LoanCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downPayment: 0,
      amount: DEFAULT_AMOUNT,
      years: DEFAULT_YEARS,
      interest: DEFAULT_INTEREST_RATE,
    };
  }

  onAmountUpdate = (amount) => {
    this.state.amount = amount;
    underscore.debounce(this.calculateDownPayment(), DEBOUNCE_DELAY);
  };

  onYearsUpdate = (years) => {
    this.state.years = years;
    underscore.debounce(this.calculateDownPayment(), DEBOUNCE_DELAY);
  };

  onInterestUpdate = (interest) => {
    this.state.interest = interest;
    underscore.debounce(this.calculateDownPayment(), DEBOUNCE_DELAY);
  };

  calculateDownPayment = () => {
    console.log("calcdownpayment");
    const request = new XMLHttpRequest();
    request.open('GET', `/api/getMonthlyPayment/?amount=${this.state.amount}&years=${this.state.years}&interestRate=${this.state.interest}`, true);

    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        this.setState({ downPayment: JSON.parse(request.responseText).monthlyPayment });
      } else {
        throw new Error(request.responseText);
      }
    };

    request.onerror = () => {
      throw new Error('Failed to connect to API');
    };

    request.send();
  };

  render() {
    return (
      <div className={s.loanCalculator}>
        <AmountBox onUpdate={this.onAmountUpdate} value={DEFAULT_AMOUNT} />
        <YearsBox onUpdate={this.onYearsUpdate} value={DEFAULT_YEARS} />
        <InterestBox onUpdate={this.onInterestUpdate} value={DEFAULT_INTEREST_RATE} />
        <div><label htmlFor="downPayment">Monthly payment</label><input type="number" id="downPayment" name="downPayment" value={this.state.downPayment} disabled/></div>
      </div>
    );
  }

}

export default withStyles(LoanCalculator, s);
