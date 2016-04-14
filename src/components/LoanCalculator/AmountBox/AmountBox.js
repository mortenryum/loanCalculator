import React from 'react';
import withStyles from '../../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './AmountBox.scss';

class AmountBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onUpdate(e.target.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default withStyles(AmountBox, s);
