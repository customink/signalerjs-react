import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {signal} from '../src';

function Mock() { return <div/>; }
Mock.displayName = 'Mock';

describe('signalFactory', () => {
  it('passes signals as props', () => {
    const Wrapped = signal()(Mock);
    const c = shallow(<Wrapped />, {context: {signals: {some: 'signals'}}});
    expect(c.find('Mock').props('signals')).toMatch({some: 'signals'});
  });
  it('uses mapSignalsToProps', () => {
    const Wrapped = signal((signals, ownProps) => ({something: 'else', ...signals, ...ownProps}))(Mock);
    const c = shallow(<Wrapped some="prop" />, {context: {signals: {some: 'signals'}}});
    expect(c.find('Mock').props('signals')).toMatch({something: 'else', some: 'prop'});
  });
  it('passes own props', () => {
    const Wrapped = signal()(Mock);
    const c = shallow(<Wrapped other="props"/>, {context: {signals: {some: 'signals'}}});
    expect(c.find('Mock').props('other')).toMatch({some: 'signals', other: 'props'});
  });
});
