import React from 'react';
import withStyles from '../../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './YearsBox.scss';

class YearsBox extends React.Component {
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
    if (val > 0 && val < 99) {
      this.state.validClass = '';
      callback(val);
    } else{
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
        <label htmlFor="years">Years of down payment</label>
        <input type="number" name="years" id="years" value={this.state.value} onChange={this.handleChange} className={this.state.validClass} />
      </div>
    );
  }
}

export default withStyles(YearsBox, s);
