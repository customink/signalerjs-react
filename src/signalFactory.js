import React from 'react';
import SignalProvider from './SignalProvider';

export default function signal(mapSignalsToProps = signals => signals) {
  return WrappedComponent => {
    const SignalWrapper = (props, context) => {
      const signalledProps = context.signals ? mapSignalsToProps(context.signals, props) : {};
      return <WrappedComponent {...props} {...signalledProps} />;
    };
    SignalWrapper.contextTypes = SignalProvider.childContextTypes;
    SignalWrapper.displayName = `Signals(${WrappedComponent.displayName})`;

    return SignalWrapper;
  };
}
