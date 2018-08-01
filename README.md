# CaseyJS

[![Greenkeeper badge](https://badges.greenkeeper.io/jakubbarczyk/casey-js.svg)](https://greenkeeper.io/)


A string utility module that handles all cases gracefully.

## Installation

Install the package with npm:

```shell
npm install casey-js
```

Include it in your project:

```javascript
import casey from "casey-js";
```

## Documentation

#### isString(any)

Returns _true_ if the passed argument is a string or a string object. Otherwise, returns _false_.

#### isLowerCase(string)

Returns _true_ if the string is in lower case. Otherwise, returns _false_.

#### isUpperCase(string)

Returns _true_ if the string is in upper case. Otherwise, returns _false_.

#### isCamelCase(string)

Returns _true_ if the string is in camel case. Otherwise, returns _false_.

#### isPascalCase(string)

Returns _true_ if the string is in pascal case. Otherwise, returns _false_.

#### isKebabCase(string)

Returns _true_ if the string is in kebab case. Otherwise, returns _false_.

#### isSnakeCase(string)

Returns _true_ if the string is in snake case. Otherwise, returns _false_.

#### isTrainCase(string)

Returns _true_ if the string is in train case. Otherwise, returns _false_.

#### caseOf(string)

Determines the case of the string and returns its name, e.g. _CAMEL_CASE_. If the string does not match any case, returns _null_.

#### toLowerCase(string)

Returns lower-cased string, e.g. _foobar_.

#### toUpperCase(string)

Returns upper-cased string, e.g. _FOOBAR_.

#### toCamelCase(string)

Returns camel-cased string, e.g. _fooBar_.

#### toPascalCase(string)

Returns pascal-cased string, e.g. _FooBar_.

#### toKebabCase(string)

Returns kebab-cased string, e.g. _foo-bar_.

#### toSnakeCase(string)

Returns snake-cased string, e.g. _foo_bar_.

#### toTrainCase(string)

Returns train-cased string, e.g. _Foo-Bar_.

## License

[MIT](http://ilee.mit-license.org)
