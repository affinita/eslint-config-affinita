# Virtuous eslint configuration

[![Travis CI Build](https://travis-ci.org/affinita/eslint-config-virtuous.svg?branch=master)](https://travis-ci.org/affinita/eslint-config-virtuous)
[![GitHub release](https://img.shields.io/github/release/affinita/eslint-config-virtuous.svg)]()
[![npm version](https://badge.fury.io/js/eslint-config-virtuous.svg)](https://www.npmjs.com/package/eslint-config-virtuous)
[![Coverage Status](https://coveralls.io/repos/github/affinita/eslint-config-virtuous/badge.svg?branch=master)](https://coveralls.io/github/affinita/eslint-config-virtuous?branch=master)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg)]()

This eslint configuration extends the default configuration from
[Airbnb](https://github.com/airbnb/javascript). It brings everything you need
to start with it.

## Installation

```
npm i @virtuous/eslint-config --save-dev
```

## Usage

Add the following to the .eslintrc in your project:

```
{
  "extends": "@virtuous/eslint-config",
  ...
}
```

## Rules

We have some extra rules implemented that extend [Airbnb's Default Codestyle](https://github.com/airbnb/javascript).
_We strongly recommend to read those default rules first to get into the basics!_

1. [General](#general)  
  1.1. [Commented out code](#commented-out-code)  
  1.2. [Comma dangle](#comma-dangle)  
  1.3. [Multiple empty lines](#multiple-empty-lines)
2. [Functions](#functions)  
  2.1. [Point free](#point-free)
3. [Objects](#objects)  
  3.1. [Single line objects](#single-line-objects)
4. [Documentation](#documentation)  
  4.1. [JSDoc requirement](#jsdoc-required)
5. [React](#react)  
  5.1 [Prop Types](#react-proptypes)

### 1. General

<a id="commented-out-code"></a><a name="1.1"></a>
#### 1.1 Commented out code
No code should be left commented out.

```javascript
/**
 * static propTypes = {
 *    width: PropTypes.string.isRequired,
 *    color: PropTypes.string,
 *    height: PropTypes.string.isRequired,
 * };
 */
```

**[⬆ back to top](#rules)**

<a id="comma-dangle"></a><a name="1.2"></a>
#### 1.2 Comma dangle
Dangling commas are required for objects with multiple items or properties.
This applies to `Array`, `Object`, `Import` and `Export`.

```javascript
// bad
const myObject = {
  a: 1,
  b: 2
};

// good
const myObject = {
  a: 1,
  b: 2,
};

// bad
import { var1, var2, var3 } from 'Variables';

// good
import {
  var1,
  var2,
  var3,
} from 'Variables';
```

**[⬆ back to top](#rules)**

<a id="multiple-empty-lines"></a><a name="1.3"></a>
#### 1.3 Multiple empty lines
There should not be multiple empty lines between code blocks.

```javascript
// bad
const a = 1;
const b = 1;


while (...) {
  ...
}

// good
const a = 1;
const b = 2;

while (...) {
  ...
}
```

**[⬆ back to top](#rules)**

### 2. Functions

<a id="point-free"></a><a name="2.1"></a>
#### 2.1 Point free
A function should not simply call another function.

```javascript
// bad
const funcA = (params) {
  ...
};

const funcB = (params) {
  funcA(params);
};

// good
const funcAB = (params) {
  ...
}
```

**[⬆ back to top](#rules)**

### 3. Objects

<a id="single-line-objects"></a><a name="3.1"></a>
#### 3.1 Single line objects
If an object is defined with multiple properties then each property
should occupy a new line.

```javascript
// bad
const x = { a: 1, b: 2, c: 3 };

// good
const w = { a: 1 };
const x = {
  a: 1,
  b: 2,
  c: 3,
};
```

**[⬆ back to top](#rules)**

### 4. Documentation

<a id="jsdoc-required"></a><a name="4.1"></a>
#### 4.1 JSDoc requirement
Every `Function`, `Class`, `Method` and `Arrow Function` definition should
include a valid JSDoc specification.

```javascript
// bad (missing parameter descriptions)
/**
 * This is funcA. It does something complicated.
 */
const funcA = (param1, param2) {
  ...
};

// bad (invalid specification)
/**
 * This is funcB. It also does something complicated.
 * @param {Object} parameters
 */
const funcB = (param1, param2) {
  ...
};

// good
/**
 * It does something simple because we are using our heads.
 * @param {string} param1 My first parameter.
 * @param {boolean} param2 My Second parameter.
 */
const funcC = (param1, param2) {
  ...
};
```

**[⬆ back to top](#rules)**

### 5. React

<a id="react-proptypes"></a><a name="5.1"></a>
#### 5.1 Prop Types
PropTypes should be sorted by type (required or not) and alphabetically.

```javascript
// bad
static propTypes = {
  width: PropTypes.string.isRequired,
  color: PropTypes.string,
  height: PropTypes.string.isRequired,
};

// good
static propTypes = {
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  color: PropTypes.string,
};
```

**[⬆ back to top](#rules)**

## License

Virtuous' eslint configuration is available under the MIT License.

See the [LICENSE](./LICENSE) file for more information.
