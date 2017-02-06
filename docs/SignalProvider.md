# SignalProvider

`SignalProvider` uses Signaler to tell an app what A/B tests are active.

## Usage

`SignalProvider` should wrap the root element or at least the largest subtree of your app that needs A/B testing.

```jsx
React.render(
  <SignalProvider>
    <KillerAbTestedApp/>
  </SignalProvider>
);

```

Nothing will be rendered until signals are retrieved.

## Props

### `features`

This prop is passed directly into `Signaler`. It can be either a url or `Signaler` configuration object. See the Signaler [documention](https://github.com/customink/signalerjs/blob/master/docs/configuration.md) for more.

### `children`

This is the child element passed to signaler. It must be a single element.
