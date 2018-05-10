(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Casey = factory());
}(this, (function () { 'use strict';

    const LOWER_CASE = 'LOWER_CASE';
    const UPPER_CASE = 'UPPER_CASE';
    const CAMEL_CASE = 'CAMEL_CASE';
    const PASCAL_CASE = 'PASCAL_CASE';
    const KEBAB_CASE = 'KEBAB_CASE';
    const SNAKE_CASE = 'SNAKE_CASE';
    const TRAIN_CASE = 'TRAIN_CASE';

    const LOWER_CASE$1 = /^[^A-Z]+$/;
    const UPPER_CASE$1 = /^[^a-z]+$/;
    const CAMEL_CASE$1 = /^[a-z]+(?:[A-Z][a-z\d]+)*$/;
    const PASCAL_CASE$1 = /^[A-Z][a-z\d]+(?:[A-Z][a-z\d]+)*$/;
    const KEBAB_CASE$1 = /^[a-z][a-z\d]+(-[a-z\d]+)+$/;
    const SNAKE_CASE$1 = /^[a-z][a-z\d]+(_[a-z\d]+)+$/;
    const TRAIN_CASE$1 = /^[A-Z][a-z\d]+(-[A-Z][a-z\d]+)+$/;
    const FRAGMENT = /([A-Za-z\d]+)+/g;

    const isString = _isString;

    const isLowerCase = _is(LOWER_CASE$1);
    const isUpperCase = _is(UPPER_CASE$1);
    const isCamelCase = _is(CAMEL_CASE$1);
    const isPascalCase = _is(PASCAL_CASE$1);
    const isKebabCase = _is(KEBAB_CASE$1);
    const isSnakeCase = _is(SNAKE_CASE$1);
    const isTrainCase = _is(TRAIN_CASE$1);

    const caseOf = _caseOf;

    const toLowerCase = _toLowerCase;
    const toUpperCase = _toUpperCase;
    const toCamelCase = _toCamelCase;
    const toPascalCase = _toPascalCase;
    const toKebabCase = _toKebabCase;
    const toSnakeCase = _toSnakeCase;
    const toTrainCase = _toTrainCase;

    function _isString(any) {
        return typeof any === 'string' || any !== null && typeof any === 'object' && any.constructor === String;
    }

    function _is(pattern) {
        return function (str) {
            return isString(str) ? pattern.test(str) : false;
        };
    }

    function _caseOf(str) {
        if (isCamelCase(str)) return CAMEL_CASE;
        else if (isPascalCase(str)) return PASCAL_CASE;
        else if (isKebabCase(str)) return KEBAB_CASE;
        else if (isSnakeCase(str)) return SNAKE_CASE;
        else if (isTrainCase(str)) return TRAIN_CASE;
        else if (isLowerCase(str)) return LOWER_CASE;
        else if (isUpperCase(str)) return UPPER_CASE;
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
        return String.prototype.match.call(str, FRAGMENT);
    }

    var casey = /*#__PURE__*/Object.freeze({
        isString: isString,
        isLowerCase: isLowerCase,
        isUpperCase: isUpperCase,
        isCamelCase: isCamelCase,
        isPascalCase: isPascalCase,
        isKebabCase: isKebabCase,
        isSnakeCase: isSnakeCase,
        isTrainCase: isTrainCase,
        caseOf: caseOf,
        toLowerCase: toLowerCase,
        toUpperCase: toUpperCase,
        toCamelCase: toCamelCase,
        toPascalCase: toPascalCase,
        toKebabCase: toKebabCase,
        toSnakeCase: toSnakeCase,
        toTrainCase: toTrainCase
    });

    return casey;

})));
