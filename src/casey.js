'use strict';

import * as _case from './case';
import * as _pattern from './pattern';

export const isString = _isString;

export const isLowerCase = _isLowerCase;
export const isUpperCase = _isUpperCase;
export const isCamelCase = _isCamelCase;
export const isPascalCase = _isPascalCase;
export const isKebabCase = _isKebabCase;
export const isSnakeCase = _isSnakeCase;
export const isTrainCase = _isTrainCase;

export const caseOf = _caseOf;

export const toLowerCase = _toLowerCase;
export const toUpperCase = _toUpperCase;
export const toCamelCase = _toCamelCase;
export const toPascalCase = _toPascalCase;
export const toKebabCase = _toKebabCase;
export const toSnakeCase = _toSnakeCase;
export const toTrainCase = _toTrainCase;

function _isString(any) {
    return typeof any === 'string' || any !== null && typeof any === 'object' && any.constructor === String;
}

function _isLowerCase(str) {
    checkForTypeError('isLowerCase', str);
    return _pattern.LOWER_CASE.test(str);
}

function _isUpperCase(str) {
    checkForTypeError('isUpperCase', str);
    return _pattern.UPPER_CASE.test(str);
}

function _isCamelCase(str) {
    checkForTypeError('isCamelCase', str);
    return _pattern.CAMEL_CASE.test(str);
}

function _isPascalCase(str) {
    checkForTypeError('isPascalCase', str);
    return _pattern.PASCAL_CASE.test(str);
}

function _isKebabCase(str) {
    checkForTypeError('isKebabCase', str);
    return _pattern.KEBAB_CASE.test(str);
}

function _isSnakeCase(str) {
    checkForTypeError('isSnakeCase', str);
    return _pattern.SNAKE_CASE.test(str);
}

function _isTrainCase(str) {
    checkForTypeError('isTrainCase', str);
    return _pattern.TRAIN_CASE.test(str);
}

function _caseOf(str) {
    checkForTypeError('caseOf', str);

    if (isCamelCase(str)) return _case.CAMEL_CASE;
    else if (isPascalCase(str)) return _case.PASCAL_CASE;
    else if (isKebabCase(str)) return _case.KEBAB_CASE;
    else if (isSnakeCase(str)) return _case.SNAKE_CASE;
    else if (isTrainCase(str)) return _case.TRAIN_CASE;
    else if (isLowerCase(str)) return _case.LOWER_CASE;
    else if (isUpperCase(str)) return _case.UPPER_CASE;

    return _case.UNDEFINED_CASE;
}

function _toLowerCase(str) {
    if (isLowerCase(str)) return str;
    return String.prototype.toLowerCase.call(str);
}

function _toUpperCase(str) {
    if (isUpperCase(str)) return str;
    return String.prototype.toUpperCase.call(str);
}

function _toCamelCase(str) {
    if (isCamelCase(str)) return str;
    return fragment(toLowerCase(str)).map((frag, idx) => idx === 0 ? frag : toUpperCase(frag[0]) + tail(frag)).join('');
}

function _toPascalCase(str) {
    if (isPascalCase(str)) return str;
    return fragment(toLowerCase(str)).map(frag => toUpperCase(frag[0]) + tail(frag)).join('');
}

function _toKebabCase(str) {
    if (isKebabCase(str)) return str;
    return fragment(toLowerCase(str)).join('-');
}

function _toSnakeCase(str) {
    if (isSnakeCase(str)) return str;
    return fragment(toLowerCase(str)).join('_');
}

function _toTrainCase(str) {
    if (isTrainCase(str)) return str;
    return fragment(toLowerCase(str)).map(frag => toUpperCase(frag[0]) + tail(frag)).join('-');
}

function tail(str) {
    return String.prototype.slice.call(str, 1);
}

function fragment(str) {
    return String.prototype.match.call(str, _pattern.FRAGMENT);
}

function checkForTypeError(fnName, any) {
    if (!isString(any)) throw new TypeError(`${fnName} argument ${any} is not a string`);
}
