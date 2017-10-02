import React from 'react';
import {shallow, mount} from 'enzyme';
import {SignalProvider} from '../src';

describe('SignalProvider', () => {
  const features = {some: 'features'};
  const signals = {foo: 'bar'};

  test('puts things in the context', () => {
    const c = mount(<SignalProvider features={features}><div/></SignalProvider>);
    c.instance().signals = true;
    expect(c.instance().getChildContext()).toMatchObject({
      signals: true,
      updateSignals: c.instance().updateSignals
    });
  });

  test('sets signals', () => {
    const c = shallow(<SignalProvider features={features}><div/></SignalProvider>);
    const p = Promise.resolve(signals);
    c.instance().signaler = {featureFlags() {return p;}};
    c.instance().componentDidMount();
    return p.then(() => expect(c.instance().signals).toBe(signals));
  });

  test('conditionally renders children', () => {
    const c = shallow(<SignalProvider features={features}><div/></SignalProvider>);
    expect(c.find('div').length).toBe(0);
    c.instance().updateSignals({showStuff: true});
    c.update();
    expect(c.find('div').length).toBe(1);
  });

  test('renders function', () => {
    const child = signals => {
      return signals && <div>hi!</div>;
    };
    const c = shallow(<SignalProvider features={features}>{child}</SignalProvider>);
    c.instance().updateSignals({showStuff: true});
    c.update();
    expect(c.html()).toMatch('hi!');
  });
});
