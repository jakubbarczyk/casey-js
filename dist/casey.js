(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.casey = {}));
})(this, (function (exports) { 'use strict';

    const LOWER_CASE$1 = 'LOWER_CASE';
    const UPPER_CASE$1 = 'UPPER_CASE';
    const CAMEL_CASE$1 = 'CAMEL_CASE';
    const PASCAL_CASE$1 = 'PASCAL_CASE';
    const KEBAB_CASE$1 = 'KEBAB_CASE';
    const SNAKE_CASE$1 = 'SNAKE_CASE';
    const TRAIN_CASE$1 = 'TRAIN_CASE';

    const LOWER_CASE = /^[^A-Z]+$/;
    const UPPER_CASE = /^[^a-z]+$/;
    const CAMEL_CASE = /^[a-z]+(?:[A-Z][a-z\d]+)*$/;
    const PASCAL_CASE = /^[A-Z][a-z\d]+(?:[A-Z][a-z\d]+)*$/;
    const KEBAB_CASE = /^[a-z][a-z\d]+(-[a-z\d]+)+$/;
    const SNAKE_CASE = /^[a-z][a-z\d]+(_[a-z\d]+)+$/;
    const TRAIN_CASE = /^[A-Z][a-z\d]+(-[A-Z][a-z\d]+)+$/;
    const FRAGMENT = /([A-Za-z\d]+)+/g;

    const isString = _isString;

    const isLowerCase = _is(LOWER_CASE);
    const isUpperCase = _is(UPPER_CASE);
    const isCamelCase = _is(CAMEL_CASE);
    const isPascalCase = _is(PASCAL_CASE);
    const isKebabCase = _is(KEBAB_CASE);
    const isSnakeCase = _is(SNAKE_CASE);
    const isTrainCase = _is(TRAIN_CASE);

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
        if (isCamelCase(str)) return CAMEL_CASE$1;
        else if (isPascalCase(str)) return PASCAL_CASE$1;
        else if (isKebabCase(str)) return KEBAB_CASE$1;
        else if (isSnakeCase(str)) return SNAKE_CASE$1;
        else if (isTrainCase(str)) return TRAIN_CASE$1;
        else if (isLowerCase(str)) return LOWER_CASE$1;
        else if (isUpperCase(str)) return UPPER_CASE$1;
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

    exports.caseOf = caseOf;
    exports.isCamelCase = isCamelCase;
    exports.isKebabCase = isKebabCase;
    exports.isLowerCase = isLowerCase;
    exports.isPascalCase = isPascalCase;
    exports.isSnakeCase = isSnakeCase;
    exports.isString = isString;
    exports.isTrainCase = isTrainCase;
    exports.isUpperCase = isUpperCase;
    exports.toCamelCase = toCamelCase;
    exports.toKebabCase = toKebabCase;
    exports.toLowerCase = toLowerCase;
    exports.toPascalCase = toPascalCase;
    exports.toSnakeCase = toSnakeCase;
    exports.toTrainCase = toTrainCase;
    exports.toUpperCase = toUpperCase;

}));
//# sourceMappingURL=casey.js.map
