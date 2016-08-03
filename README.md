# CaseyJS

A string utility module that handles all cases gracefully.

## Installation

Install the package with npm:

```shell
npm install casey-js
```

Include it in your project:

```javascript
import casey from 'casey-js';
```

## Documentation

#### isString(*)

Returns _true_ if the argument passed is a string or string object. Otherwise, returns _false_.

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

#### caseOf(string)

Determines the case of the string and returns its name, e.g. _CAMEL_CASE_. If the string does not match any case, returns _UNDEFINED_CASE_.

#### toLowerCase(string)

Returns lower-cased string.

#### toUpperCase(string)

Returns upper-cased string.

#### toCamelCase(string)

Returns camel-cased string.

#### toPascalCase(string)

Returns pascal-cased string.

#### toKebabCase(string)

Returns kebab-cased string.

#### toSnakeCase(string)

Returns snake-cased string.

## License

MIT
