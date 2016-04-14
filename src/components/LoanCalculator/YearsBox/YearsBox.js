import React from 'react';
import withStyles from '../../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './YearsBox.scss';

class YearsBox extends React.Component {
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
        <label htmlFor="years">Years of down payment</label>
        <input type="number" name="years" id="years" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default withStyles(YearsBox, s);
