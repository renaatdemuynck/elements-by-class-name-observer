# Elements By Class Name Observer

Detects changes in the list of elements with a certain class name.


## Installation

Using NPM:

```sh
npm install @renaatdemuynck/elements-by-class-name-observer
```

Using Yarn:

```sh
yarn add @renaatdemuynck/elements-by-class-name-observer
```

## Usage

```javascript
import elementsByClassNameObserver from '@renaatdemuynck/elements-by-class-name-observer';

elementsByClassNameObserver('some-class-name', element => {
    console.info('Element added');
    console.log(element);
}, element => {
    console.info('Element deleted');
    console.log(element);
});

```
