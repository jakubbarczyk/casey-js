"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const LOWER_CASE = exports.LOWER_CASE = /^[^A-Z]+$/;
const UPPER_CASE = exports.UPPER_CASE = /^[^a-z]+$/;
const CAMEL_CASE = exports.CAMEL_CASE = /^[a-z]+([A-Z]{1}[a-z0-9]+)+/;
const PASCAL_CASE = exports.PASCAL_CASE = /^([A-Z]{1}[a-z0-9])+/;
const KEBAB_CASE = exports.KEBAB_CASE = /^[a-z]+(-[a-z]+)+$/;
const SNAKE_CASE = exports.SNAKE_CASE = /^[a-z]+(_[a-z]+)+$/;
const FRAGMENT = exports.FRAGMENT = /([A-Za-z0-9]+)+/g;