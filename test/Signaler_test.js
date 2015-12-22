import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import Signaler from '../src';
import signalerjs from 'signalerjs';

const signalerInstance = new signalerjs({
  feature1: {
    flags: {
      flag1: 1,
      flag2: 0,
      duplicate: 0,
      randomFlag: 0,
      arr1: 0,
      arr2: 0,
      testing: 0
    }
  }
});

describe('Signaler', () => {
  let signalerComponent;
  describe('#getComponent', () => {
    beforeEach(() => {
      signalerComponent = ReactDOM.render(
        <Signaler signalerInstance={signalerInstance} featureName="feature1">
          <div flag="flag1">Flag</div>
          <div flag="flag2">Flag2</div>
          <div flag="duplicate">Dup 1</div>
          <div flag="duplicate">Dup 2</div>
          <div flag={['arr1', 'arr2']}>Array</div>
          <div flag="test.+">Wild</div>
        </Signaler>,
        document.getElementById('app')
      );
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    });

    it('gets component with matching path', () => {
      signalerComponent.state.flag = 'flag2';
      const comp = signalerComponent.getComponent();
      expect(comp.props.children).toBe('Flag2');
    });

    it('returns null if there is no matching switch', () => {
      signalerComponent.state.flag = 'nomatch';
      const comp = signalerComponent.getComponent();
      expect(comp).toNotExist();
    });

    it('gets first match if duplicate paths', () => {
      signalerComponent.state.flag = 'duplicate';
      const comp = signalerComponent.getComponent();
      expect(comp.props.children).toBe('Dup 1');
    });

    it('handles regex', () => {
      signalerComponent.state.flag = 'testing';
      const comp = signalerComponent.getComponent();
      expect(comp.props.children).toBe('Wild');
    });

    it('handles array of paths', () => {
      signalerComponent.state.flag = 'arr1';
      const comp = signalerComponent.getComponent();
      expect(comp.props.children).toBe('Array');
    });
  });

  describe('#render', () => {
    beforeEach(() => {
      signalerComponent = ReactDOM.render(
        <Signaler signalerInstance={signalerInstance} featureName="feature1">
          <div flag="flag1">Hi</div>
        </Signaler>,
        document.getElementById('app')
      );
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    });

    it('renders nothing if no match', (done) => {
      signalerComponent.state.flag = 'nomatch';
      signalerComponent.forceUpdate(() => {
        const component = ReactDOM.findDOMNode(signalerComponent);
        expect(component).toNotExist();
        done();
      });
    });

    it('renders matching component', (done) => {
      signalerComponent.state.flag = 'flag1';
      signalerComponent.forceUpdate(() => {
        const component = ReactDOM.findDOMNode(signalerComponent);
        expect(component.innerHTML).toBe('Hi');
        done();
      });
    });
  });

  describe('with wrapper', () => {
    beforeEach(() => {
      signalerComponent = ReactDOM.render(
        <Signaler signalerInstance={signalerInstance} featureName="feature1" wrapper="span">
          <div flag="flag1">Hi</div>
        </Signaler>,
        document.getElementById('app')
      );
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById('app'));
    });

    it('renders just wrapper when no match', (done) => {
      signalerComponent.state.flag = 'nomatch';
      signalerComponent.forceUpdate(() => {
        const wrapper = ReactDOM.findDOMNode(signalerComponent);
        expect(wrapper.innerHTML).toBe('');
        expect(wrapper.tagName).toBe('SPAN');
        done();
      });
    });

    it('renders matched component in wrapper', (done) => {
      signalerComponent.state.flag = 'flag1';
      signalerComponent.forceUpdate(() => {
        const wrapper = ReactDOM.findDOMNode(signalerComponent);
        const component = wrapper.children[0];
        expect(wrapper.tagName).toBe('SPAN');
        expect(component.innerHTML).toBe('Hi');
        done();
      });
    });
  });
});
