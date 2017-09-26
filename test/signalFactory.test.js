import React from 'react';
import {shallow} from 'enzyme';
import {signal} from '../src';

function Mock() { return <div/>; }
Mock.displayName = 'Mock';

describe('signalFactory', () => {
  test('passes signals as props', () => {
    const Wrapped = signal()(Mock);
    const c = shallow(<Wrapped />, {context: {signals: {some: 'signals'}}});
    expect(c.find('Mock').props('signals')).toMatchObject({some: 'signals'});
  });

  test('uses mapSignalsToProps', () => {
    const Wrapped = signal((signals, ownProps) => ({something: 'else', ...signals, ...ownProps}))(Mock);
    const c = shallow(<Wrapped some="prop" />, {context: {signals: {some: 'signals'}}});
    expect(c.find('Mock').props('signals')).toMatchObject({something: 'else', some: 'prop'});
  });

  test('passes own props', () => {
    const Wrapped = signal()(Mock);
    const c = shallow(<Wrapped other="props"/>, {context: {signals: {some: 'signals'}}});
    expect(c.find('Mock').props('other')).toMatchObject({some: 'signals', other: 'props'});
  });
});
