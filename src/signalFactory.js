import React, {Component} from 'react';
  import SignalProvider from './SignalProvider';

export default function signal(mapSignalsToProps = signals => signals) {
  return WrappedComponent =>
    class SignalWrapper extends Component {
      static contextTypes = SignalProvider.childContextTypes;
      static displayName = `Signals(${WrappedComponent.displayName})`;

      render() {
        const signalledProps = this.context.signals ? mapSignalsToProps(this.context.signals, this.props) : {};
        return <WrappedComponent {...this.props} {...signalledProps} />;
      }
    };
}
