"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isString = isString;
exports.isLowerCase = isLowerCase;
exports.isUpperCase = isUpperCase;
exports.isCamelCase = isCamelCase;
exports.isPascalCase = isPascalCase;
exports.isKebabCase = isKebabCase;
exports.isSnakeCase = isSnakeCase;
exports.caseOf = caseOf;
exports.toLowerCase = toLowerCase;
exports.toUpperCase = toUpperCase;
exports.toCamelCase = toCamelCase;
exports.toPascalCase = toPascalCase;
exports.toKebabCase = toKebabCase;
exports.toSnakeCase = toSnakeCase;

var _case2 = require("./case");

var _case = _interopRequireWildcard(_case2);

var _pattern2 = require("./pattern");

var _pattern = _interopRequireWildcard(_pattern2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function isString(arg) {
    return typeof arg === "string" || arg !== null && typeof arg === "object" && arg.constructor === String;
}

function isLowerCase(str) {
    checkForTypeError("isLowerCase", str);
    return _pattern.LOWER_CASE.test(str);
}

function isUpperCase(str) {
    checkForTypeError("isUpperCase", str);
    return _pattern.UPPER_CASE.test(str);
}

function isCamelCase(str) {
    checkForTypeError("isCamelCase", str);
    return _pattern.CAMEL_CASE.test(str);
}

function isPascalCase(str) {
    checkForTypeError("isPascalCase", str);
    return _pattern.PASCAL_CASE.test(str);
}

function isKebabCase(str) {
    checkForTypeError("isKebabCase", str);
    return _pattern.KEBAB_CASE.test(str);
}

function isSnakeCase(str) {
    checkForTypeError("isSnakeCase", str);
    return _pattern.SNAKE_CASE.test(str);
}

function caseOf(str) {
    checkForTypeError("caseOf", str);

    if (isCamelCase(str)) return _case.CAMEL_CASE;else if (isPascalCase(str)) return _case.PASCAL_CASE;else if (isKebabCase(str)) return _case.KEBAB_CASE;else if (isSnakeCase(str)) return _case.SNAKE_CASE;else if (isLowerCase(str)) return _case.LOWER_CASE;else if (isUpperCase(str)) return _case.UPPER_CASE;

    return _case.UNDEFINED_CASE;
}

function toLowerCase(str) {
    if (isLowerCase(str)) return str;
    return String.prototype.toLowerCase.call(str);
}

function toUpperCase(str) {
    if (isUpperCase(str)) return str;
    return String.prototype.toUpperCase.call(str);
}

function toCamelCase(str) {
    if (isCamelCase(str)) return str;
    return fragment(toLowerCase(str)).map((frag, idx) => idx === 0 ? frag : toUpperCase(frag[0]) + tail(frag)).join("");
}

function toPascalCase(str) {
    if (isPascalCase(str)) return str;
    return fragment(toLowerCase(str)).map(frag => toUpperCase(frag[0]) + tail(frag)).join("");
}

function toKebabCase(str) {
    if (isKebabCase(str)) return str;
    return fragment(toLowerCase(str)).join("-");
}

function toSnakeCase(str) {
    if (isSnakeCase(str)) return str;
    return fragment(toLowerCase(str)).join("_");
}

function tail(str) {
    return String.prototype.slice.call(str, 1);
}

function fragment(str) {
    return String.prototype.match.call(str, _pattern.FRAGMENT);
}

function checkForTypeError(fnName, arg) {
    if (!isString(arg)) throw new TypeError(`${ fnName } argument ${ arg } is not a string`);
}