# signal

A component factory that returns a wrapped version of a given component provided with A/B testing props.

## Usage

On export from a module
```jsx
export default signal()(ABTestedComponent);
```

Before use
```jsx
import ABTestedComponent from './ABTestedComponent'

... // in render function of some component
const WrappedComponent = signal()(ABTestedComponent);

return <WrappedComponent/>;
```

`ABTestedComponent` will now receive a `signals` prop containing all the signals.

To customize how the signals are passed to the wrap component, `signal` can be passed a function to map signals to props.

```jsx
const mapSignalsToProps = (signals, ownProps) => {
  return {showLink: signals.showShowLink};
}

export default signal(mapSignalsToProps)(ABTestedComponent);
```
