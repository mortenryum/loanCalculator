import React from 'react';
import withStyles from '../../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './AmountBox.scss';

class AmountBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      validClass: '',
    };
  }

  componentDidMount = () => {
    this.setState({ value: this.props.value });
    this.validate(this.props.value, this.props.onUpdate);
  };

  validate = (val, callback) => {
    if (!val) {
      this.state.validClass = s.invalid;
    }
    if (val > 1000 && val < 100000000) {
      this.state.validClass = '';
      callback(val);
    } else {
      this.state.validClass = s.invalid;
    }
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.validate(e.target.value, this.props.onUpdate);
  };

  render() {
    return (
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount"
               value={this.state.value} onChange={this.handleChange} className={this.state.validClass} />
      </div>
    );
  }
}

export default withStyles(AmountBox, s);
