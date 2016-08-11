"use strict";

export const LOWER_CASE = /^[^A-Z]+$/;
export const UPPER_CASE = /^[^a-z]+$/;
export const CAMEL_CASE = /^[a-z]+([A-Z]{1}[a-z0-9]+)+/;
export const PASCAL_CASE = /^([A-Z]{1}[a-z0-9])+/;
export const KEBAB_CASE = /^[a-z]{1}[a-z0-9]+(-[a-z0-9]+)+$/;
export const SNAKE_CASE = /^[a-z]{1}[a-z0-9]+(_[a-z0-9]+)+$/;
export const TRAIN_CASE = /^[A-Z]{1}[A-Z0-9]+(-[A-Z0-9]+)+$/;
export const FRAGMENT = /([A-Za-z0-9]+)+/g;
