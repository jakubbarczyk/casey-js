"use strict";

export const LOWER_CASE = /^[^A-Z]+$/;
export const UPPER_CASE = /^[^a-z]+$/;
export const CAMEL_CASE = /^[a-z]+([A-Z]{1}[a-z0-9]+)+/;
export const PASCAL_CASE = /^([A-Z]{1}[a-z0-9])+/;
export const KEBAB_CASE = /^[a-z]+(-[a-z]+)+$/;
export const SNAKE_CASE = /^[a-z]+(_[a-z]+)+$/;
export const FRAGMENT = /([A-Za-z0-9]+)+/g;
