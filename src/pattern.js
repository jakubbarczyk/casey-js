'use strict';

export const LOWER_CASE = /^[^A-Z]+$/;
export const UPPER_CASE = /^[^a-z]+$/;
export const CAMEL_CASE = /^[a-z]+(?:[A-Z][a-z\d]+)*$/;
export const PASCAL_CASE = /^[A-Z][a-z\d]+(?:[A-Z][a-z\d]+)*$/;
export const KEBAB_CASE = /^[a-z][a-z\d]+(-[a-z\d]+)+$/;
export const SNAKE_CASE = /^[a-z][a-z\d]+(_[a-z\d]+)+$/;
export const TRAIN_CASE = /^[A-Z][a-z\d]+(-[A-Z][a-z\d]+)+$/;
export const FRAGMENT = /([A-Za-z\d]+)+/g;
