import React, {Component, PropTypes} from 'react';
import Signaler from 'signalerjs';

export default class SignalProvider extends Component {
  static propTypes = {
    features: PropTypes.oneOf([PropTypes.object, PropTypes.string]).isRequired,
    children: PropTypes.element
  }

  static childContextTypes = {
    signals: PropTypes.object,
    updateSignals: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
    this.signals = null;
    this.signaler = new Signaler(props.features);
  }

  getChildContext() {
    return {
      signals: this.signals,
      updateSignals: this.updateSignals
    };
  }

  componentDidMount() {
    this.signaler.featureFlags().then(this.updateSignals);
  }

  updateSignals = flags => {
    this.signals = flags;
    this.forceUpdate();
  };

  render() {
    return this.signals && React.Children.only(this.props.children);
  }
}
