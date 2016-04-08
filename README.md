[![npm version](https://badge.fury.io/js/signalerjs-react.svg)](http://badge.fury.io/js/signalerjs-react)
[![Build Status](https://secure.travis-ci.org/customink/signalerjs-react.svg?branch=master)](http://travis-ci.org/customink/signalerjs-react)
[![Dependency Status](https://david-dm.org/customink/signalerjs-react.svg)](https://david-dm.org/customink/signalerjs-react)

# signalerjs-react

`signalerjs-react` provides a React interface for the [`signalerjs`](https://github.com/customink/signalerjs) A/B testing library.

The `Signaler` container component provided by `signalerjs-react` can accept any React elements, as long as they have a `flag` property. `signalerjs-react` is configurable, and you can read about the properties the [`Signaler`](docs/Signaler.md) and children elements (that we will refer to as ["Signals"](docs/Signal.md)) take in the [docs](docs).

## Installation

### npm

```sh
npm install --save signalerjs-react
```

### cdn

While the `npm` package is recommended for production usage, if you just want to drop a `<script>` tag on your page you can also use the UMD/global build hosted on [`npmcdn`](https://npmcdn.com/signalerjs-react).

```html
<script src="https://npmcdn.com/signalerjs-react@0.2.1"></script>
```

## Example Usage

```js
import Signaler from 'signalerjs-react';

<Signaler signalerInstance={instance} featureName="myFeature">
  <ComponentA flag="testA" />
  <ComponentB flag="testB">
    <AnotherComponent />
  </ComponentB>
  <ComponentC flag={["testC", "testD"]} />
  <DefaultComponent flag=".*" />
</Signaler>
```
Signaler also can take a function as a child to render specific elements

```js
<Signaler signalerInstance={instance} featureName="myFeature">
  {flag => {
    const content = <SharedStuff />
    switch(flag) {
      case 'testA':
        return <Wrapper><ComponentA /></Wrapper>;
      case 'testB':
        return <ComponentB>{content}</ComponentB>;
      case 'testC':
      case 'testD':
        return content;
      default:
        return <DefaultComponent />
    }
  }}  
</Signaler>
```
