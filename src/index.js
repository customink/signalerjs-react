import React, {Component, PropTypes} from 'react';

export default class Signaler extends Component {
  static displayName = 'Signaler';

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
    signalerInstance: PropTypes.object.isRequired,
    featureName: PropTypes.string.isRequired,
    wrapper: React.PropTypes.node
  };

  state = {
    flag: undefined
  };

  componentDidMount() {
    this.getFlag();
  }

  componentWillReceiveProps() {
    this.getFlag();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  mounted = true;

  getFlag = () => {
    this.props.signalerInstance.featureFlag(this.props.featureName).then(flag => {
      if (this.mounted) {
        this.setState({flag});
      }
    });
  }

  getComponent = () => {
    var children = [].concat(this.props.children);
    return children.filter(child => {
      var childFlags = [].concat(child.props.flag);
      var regex = new RegExp(`^${childFlags.join('|')}$`);
      return regex.test(this.state.flag);
    })[0] || null;
  }

  render() {
    if (typeof this.props.children === 'function') {
      return this.props.children(this.state.flag);
    }
    const component = this.getComponent();
    if (this.props.wrapper) {
      return React.createElement(
        this.props.wrapper,
        this.props,
        component
      );
    } else {
      return component;
    }
  }
}
