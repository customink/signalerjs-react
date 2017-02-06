import React, {Component} from 'react';
  import SignalProvider from './SignalProvider';

export default function featureFlagged(mapSignalsToProps = signals => signals) {
  return WrappedComponent =>
  class SignalWrapper extends Component {
    static contextTypes = SignalProvider.childContextTypes;
    static displayName = `Signals(${WrappedComponent.displayName})`;

    render() {
      return <WrappedComponent {...this.props} {...mapSignalsToProps(this.context.signals)} />;
    }
  };
}
