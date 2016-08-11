"use strict";

import * as _case from "./case";
import * as _pattern from "./pattern";

export function isString(arg) {
    return typeof arg === "string" || arg !== null && typeof arg === "object" && arg.constructor === String;
}

export function isLowerCase(str) {
    checkForTypeError("isLowerCase", str);
    return _pattern.LOWER_CASE.test(str);
}

export function isUpperCase(str) {
    checkForTypeError("isUpperCase", str);
    return _pattern.UPPER_CASE.test(str);
}

export function isCamelCase(str) {
    checkForTypeError("isCamelCase", str);
    return _pattern.CAMEL_CASE.test(str);
}

export function isPascalCase(str) {
    checkForTypeError("isPascalCase", str);
    return _pattern.PASCAL_CASE.test(str);
}

export function isKebabCase(str) {
    checkForTypeError("isKebabCase", str);
    return _pattern.KEBAB_CASE.test(str);
}

export function isSnakeCase(str) {
    checkForTypeError("isSnakeCase", str);
    return _pattern.SNAKE_CASE.test(str);
}

export function isTrainCase(str) {
    checkForTypeError("isTrainCase", str);
    return _pattern.TRAIN_CASE.test(str);
}

export function caseOf(str) {
    checkForTypeError("caseOf", str);

    if (isCamelCase(str)) return _case.CAMEL_CASE;
    else if (isPascalCase(str)) return _case.PASCAL_CASE;
    else if (isKebabCase(str)) return _case.KEBAB_CASE;
    else if (isSnakeCase(str)) return _case.SNAKE_CASE;
    else if (isTrainCase(str)) return _case.TRAIN_CASE;
    else if (isLowerCase(str)) return _case.LOWER_CASE;
    else if (isUpperCase(str)) return _case.UPPER_CASE;

    return _case.UNDEFINED_CASE;
}

export function toLowerCase(str) {
    if (isLowerCase(str)) return str;
    return String.prototype.toLowerCase.call(str);
}

export function toUpperCase(str) {
    if (isUpperCase(str)) return str;
    return String.prototype.toUpperCase.call(str);
}

export function toCamelCase(str) {
    if (isCamelCase(str)) return str;
    return fragment(toLowerCase(str)).map((frag, idx) => idx === 0 ? frag : toUpperCase(frag[0]) + tail(frag)).join("");
}

export function toPascalCase(str) {
    if (isPascalCase(str)) return str;
    return fragment(toLowerCase(str)).map((frag) => toUpperCase(frag[0]) + tail(frag)).join("");
}

export function toKebabCase(str) {
    if (isKebabCase(str)) return str;
    return fragment(toLowerCase(str)).join("-");
}

export function toSnakeCase(str) {
    if (isSnakeCase(str)) return str;
    return fragment(toLowerCase(str)).join("_");
}

export function toTrainCase(str) {
    if (isTrainCase(str)) return str;
    return fragment(toUpperCase(str)).join("-");
}

function tail(str) {
    return String.prototype.slice.call(str, 1);
}

function fragment(str) {
    return String.prototype.match.call(str, _pattern.FRAGMENT)
}

function checkForTypeError(fnName, arg) {
    if (!isString(arg)) throw new TypeError(`${fnName} argument ${arg} is not a string`);
}
