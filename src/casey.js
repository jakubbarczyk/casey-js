'use strict';

import * as _case from './case';
import * as _pattern from './pattern';

export const isString = _isString;

export const isLowerCase = _is(_pattern.LOWER_CASE);
export const isUpperCase = _is(_pattern.UPPER_CASE);
export const isCamelCase = _is(_pattern.CAMEL_CASE);
export const isPascalCase = _is(_pattern.PASCAL_CASE);
export const isKebabCase = _is(_pattern.KEBAB_CASE);
export const isSnakeCase = _is(_pattern.SNAKE_CASE);
export const isTrainCase = _is(_pattern.TRAIN_CASE);

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

function _is(pattern) {
    return function (str) {
        return isString(str) ? pattern.test(str) : false;
    };
}

function _caseOf(str) {
    if (isCamelCase(str)) return _case.CAMEL_CASE;
    else if (isPascalCase(str)) return _case.PASCAL_CASE;
    else if (isKebabCase(str)) return _case.KEBAB_CASE;
    else if (isSnakeCase(str)) return _case.SNAKE_CASE;
    else if (isTrainCase(str)) return _case.TRAIN_CASE;
    else if (isLowerCase(str)) return _case.LOWER_CASE;
    else if (isUpperCase(str)) return _case.UPPER_CASE;
    else return null;
}

function _toLowerCase(str) {
    return String.prototype.toLowerCase.call(String(str));
}

function _toUpperCase(str) {
    return String.prototype.toUpperCase.call(String(str));
}

function _toCamelCase(str) {
    return _fragment(_toLowerCase(String(str))).map((frag, idx) => idx === 0 ? frag : _toUpperCase(frag[0]) + _tail(frag)).join('');
}

function _toPascalCase(str) {
    return _fragment(_toLowerCase(String(str))).map(frag => _toUpperCase(frag[0]) + _tail(frag)).join('');
}

function _toKebabCase(str) {
    return _fragment(_toLowerCase(String(str))).join('-');
}

function _toSnakeCase(str) {
    return _fragment(_toLowerCase(String(str))).join('_');
}

function _toTrainCase(str) {
    return _fragment(toLowerCase(String(str))).map(frag => toUpperCase(frag[0]) + _tail(frag)).join('-');
}

function _tail(str) {
    return String.prototype.slice.call(str, 1);
}

function _fragment(str) {
    return String.prototype.match.call(str, _pattern.FRAGMENT);
}
