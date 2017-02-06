import React from 'react';
import {shallow} from 'enzyme';
import expect from 'expect';
import {featureFlagged} from '../src';

function Mock() { return <div/>; }
Mock.displayName = 'Mock';

describe('signalFactory', () => {
  it('passes signals as props', () => {
    const Wrapped = featureFlagged()(Mock);
    const c = shallow(<Wrapped />, {context: {signals: {some: 'signals'}}});
    expect(c.find('Mock').props('signals')).toMatch({some: 'signals'});
  });
  it('uses mapSignalsToProps', () => {
    const Wrapped = featureFlagged(() => ({something: 'else'}))(Mock);
    const c = shallow(<Wrapped />, {context: {signals: {some: 'signals'}}});
    expect(c.find('Mock').props('signals')).toMatch({something: 'else'});
  });
  it('passes own props', () => {
    const Wrapped = featureFlagged()(Mock);
    const c = shallow(<Wrapped other="props"/>, {context: {signals: {some: 'signals'}}});
    expect(c.find('Mock').props('other')).toMatch({some: 'signals', other: 'props'});
  });
});
