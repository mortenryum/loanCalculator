import React from 'react';
import withStyles from '../../../../node_modules/isomorphic-style-loader/lib/withStyles';
import s from './InterestBox.scss';

class InterestBox extends React.Component {
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

  componentWillMount = () => {
    this.props.onUpdate(this.state.value);
  };

  render() {
    return (
      <div>
        <label htmlFor="interest">Interest</label>
        <input type="number" name="interest" id="interest" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default withStyles(InterestBox, s);
