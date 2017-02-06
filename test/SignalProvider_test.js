import React from 'react';
import {shallow, mount} from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
// import Signaler from 'signalerjs';
import {SignalProvider} from '../src';

describe('SignalProvider', () => {
  const features = {some: 'features'};
  const signals = {foo: 'bar'};
  it('puts things in the context', () => {
    const c = mount(<SignalProvider features={features}><div/></SignalProvider>);
    c.instance().signals = true;
    expect(c.instance().getChildContext()).toMatch({
      signals: true,
      updateSignals: c.instance().updateSignals
    });
  });
  it('sets signals', () => {
    const c = shallow(<SignalProvider features={features}><div/></SignalProvider>);
    const p = Promise.resolve(signals);
    c.instance().signaler = {featureFlags: sinon.stub().returns(p)};
    c.instance().componentDidMount();
    return p.then(() => expect(c.instance().signals).toBe(signals));
  });
  it('conditionally renders children', () => {
    const c = shallow(<SignalProvider features={features}><div/></SignalProvider>);
    expect(c.find('div').length).toBe(0);
    c.instance().updateSignals({showStuff: true});
    expect(c.find('div').length).toBe(1);
  });
});
