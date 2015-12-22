# Signal

A "Signal" component is always used inside of the context of a `Signaler` component. It defines a feature flag that the component will render on. We call the children of `Signaler` "Signals", but they can be any React component as long as they provide the `flag` property.

```js
  <AboutComponent flag="flagValue" />
```


## Required Props

### path

The `flag` prop is a string or array of strings where each string represents a regular expression. If any of the regular expressions matches the path, the corresponding handler component will be rendered. If you define multiple `Signals`es with the same path, the first one will be used.
