import React from "react";

class ChangingProgressProvider extends React.Component {
  interval = undefined;

  static defaultProps = {
    interval: 1000,
  };

  state = {
    valuesIndex: 0,
  };

  componentDidMount() {
    this.interval = setTimeout(() => {
      this.setState({
        valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length,
      });
    }, this.props.interval);
  }
  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;
