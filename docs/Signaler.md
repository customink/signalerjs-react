# Signaler

The `Signaler` is a container component that holds a list of React components. It is the brains of `signalerjs-react`, and controls the child that is rendered based on the feature flag group the user has been opted into (`signalerjs` operates on cookies). `Switcher` allows any React component you want to be used as a ["Signal"](./Signal.md) as long as it has a `flag` property (a string representing a regular expression).

```js
<Signaler signalerInstance={instance} featureName="myFeature">
  <ComponentA flag="testA" />
  <ComponentB flag="testB">
    <AnotherComponent />
  </ComponentB>
  <ComponentC flag={["testC", "testD"]} />
  <DefaultComponent flag=".*" />
</Signaler>
```


## Required Props

### children

To actually render anything, the `Signaler` must have any number of children elements. These children components must each have a `flag` prop. The component with the matching flag (if there is one) will be rendered.

### featureFlag

This is the name of the feature (aka the test name).

### signalerInstance

This is the instantiated instance of [`signalerjs`](https://github.com/customink/signalerjs), which is used to look up the feature flag (and opt the user into a feature flag group if they are not in one yet).


## Optional Props

### wrapper

If the `wrapper` prop is defined, the rendered child component will be wrapped in the specified React component. Any additional props passed to the `Signaler` will also be properties of this wrapper component.
