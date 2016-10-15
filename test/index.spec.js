'use strict';

import {should} from 'chai';
import * as casey from '../src/casey';

before(should);

describe('CaseyJS', () => {
    describe('isString', () => {
        it('should return true when the argument is a string', () => {
            casey.isString('foobar').should.be.true;
        });

        it('should return true when the argument is a string object', () => {
            casey.isString(new String('foobar')).should.be.true;
        });

        it('should return false when the argument is an object', () => {
            casey.isString({}).should.be.false;
        });

        it('should return false when the argument is an array', () => {
            casey.isString([]).should.be.false;
        });

        it('should return false when the argument is a number', () => {
            casey.isString(0.1).should.be.false;
        });

        it('should return false when the argument is NaN', () => {
            casey.isString(NaN).should.be.false;
        });

        it('should return false when the argument is null', () => {
            casey.isString(null).should.be.false;
        });

        it('should return false when the argument is undefined', () => {
            casey.isString().should.be.false;
        });
    });

    describe('isLowerCase', () => {
        it('should return true when the argument is in lower case', () => {
            casey.isLowerCase('foobarbaz').should.be.true;
        });

        it('should return false when the argument is not in lower case', () => {
            casey.isLowerCase('FOOBARBAZ').should.be.false;
        });

        it('should throw an error when the argument is not a string', () => {
            (() => casey.isLowerCase(null)).should.throw(TypeError, 'isLowerCase argument null is not a string');
        });
    });

    describe('isUpperCase', () => {
        it('should return true when the argument is in upper case', () => {
            casey.isUpperCase('FOOBARBAZ').should.be.true;
        });

        it('should return false when the argument is not in upper case', () => {
            casey.isUpperCase('foobarbaz').should.be.false;
        });

        it('should throw an error when the argument is not a string', () => {
            (() => casey.isUpperCase(null)).should.throw(TypeError, 'isUpperCase argument null is not a string');
        });
    });

    describe('isCamelCase', () => {
        it('should return true when the argument is in camel case', () => {
            casey.isCamelCase('fooBarBaz').should.be.true;
        });

        it('should return false when the argument is not in camel case', () => {
            casey.isCamelCase('FooBarBaz').should.be.false;
        });

        it('should throw an error when the argument is not a string', () => {
            (() => casey.isCamelCase(null)).should.throw(TypeError, 'isCamelCase argument null is not a string');
        });
    });

    describe('isPascalCase', () => {
        it('should return true when the argument is in pascal case', () => {
            casey.isPascalCase('FooBarBaz').should.be.true;
        });

        it('should return false when the argument is not in pascal case', () => {
            casey.isPascalCase('fooBarBaz').should.be.false;
        });

        it('should throw an error when the argument is not a string', () => {
            (() => casey.isPascalCase(null)).should.throw(TypeError, 'isPascalCase argument null is not a string');
        });
    });

    describe('isKebabCase', () => {
        it('should return true when the argument is in kebab case', () => {
            casey.isKebabCase('foo-bar-baz').should.be.true;
        });

        it('should return false when the argument is not in kebab case', () => {
            casey.isKebabCase('foo_Bar-Baz').should.be.false;
        });

        it('should throw an error when the argument is not a string', () => {
            (() => casey.isKebabCase(null)).should.throw(TypeError, 'isKebabCase argument null is not a string');
        });
    });

    describe('isSnakeCase', () => {
        it('should return true when the argument is in snake case', () => {
            casey.isSnakeCase('foo_bar_baz').should.be.true;
        });

        it('should return false when the argument is not in snake case', () => {
            casey.isSnakeCase('foo_Bar-Baz').should.be.false;
        });

        it('should throw an error when the argument is not a string', () => {
            (() => casey.isSnakeCase(null)).should.throw(TypeError, 'isSnakeCase argument null is not a string');
        });
    });

    describe('isTrainCase', () => {
        it('should return true when the argument is in train case', () => {
            casey.isTrainCase('Foo-Bar-Baz').should.be.true;
        });

        it('should return false when the argument is not in train case', () => {
            casey.isTrainCase('foo_Bar-Baz').should.be.false;
        });

        it('should throw an error when the argument is not a string', () => {
            (() => casey.isTrainCase(null)).should.throw(TypeError, 'isTrainCase argument null is not a string');
        });
    });

    describe('caseOf', () => {
        it('should return LOWER_CASE when the argument is in lower case', () => {
            casey.caseOf('foo_bar-baz').should.equal('LOWER_CASE');
        });

        it('should return UPPER_CASE when the argument is in upper case', () => {
            casey.caseOf('FOO_BAR-BAZ').should.equal('UPPER_CASE');
        });

        it('should return CAMEL_CASE when the argument is in camel case', () => {
            casey.caseOf('fooBarBaz').should.equal('CAMEL_CASE');
        });

        it('should return PASCAL_CASE when the argument is in pascal case', () => {
            casey.caseOf('FooBarBaz').should.equal('PASCAL_CASE');
        });

        it('should return KEBAB_CASE when the argument is in kebab case', () => {
            casey.caseOf('foo-bar-baz').should.equal('KEBAB_CASE');
        });

        it('should return SNAKE_CASE when the argument is in snake case', () => {
            casey.caseOf('foo_bar_baz').should.equal('SNAKE_CASE');
        });

        it('should return TRAIN_CASE when the argument is in train case', () => {
            casey.caseOf('Foo-Bar-Baz').should.equal('TRAIN_CASE');
        });

        it('should return UNDEFINED_CASE when the argument does not match any case', () => {
            casey.caseOf('foo_Bar-BAZ').should.equal('UNDEFINED_CASE');
        });

        it('should throw an error when the argument is not a string', () => {
            (() => casey.caseOf(null)).should.throw(TypeError, 'caseOf argument null is not a string');
        });
    });

    describe('toLowerCase', () => {
        it('should return lower-cased argument', () => {
            casey.toLowerCase('foo_Bar-BAZ').should.equal('foo_bar-baz');
        });
    });

    describe('toUpperCase', () => {
        it('should return upper-cased argument', () => {
            casey.toUpperCase('foo_Bar-BAZ').should.equal('FOO_BAR-BAZ');
        });
    });

    describe('toCamelCase', () => {
        it('should return camel-cased argument', () => {
            casey.toCamelCase('foo_Bar-BAZ').should.equal('fooBarBaz');
        });
    });

    describe('toPascalCase', () => {
        it('should return pascal-cased argument', () => {
            casey.toPascalCase('foo_Bar-BAZ').should.equal('FooBarBaz');
        });
    });

    describe('toKebabCase', () => {
        it('should return kebab-cased argument', () => {
            casey.toKebabCase('foo_Bar-BAZ').should.equal('foo-bar-baz');
        });
    });

    describe('toSnakeCase', () => {
        it('should return snake-cased argument', () => {
            casey.toSnakeCase('foo_Bar-BAZ').should.equal('foo_bar_baz');
        });
    });

    describe('toTrainCase', () => {
        it('should return train-cased argument', () => {
            casey.toTrainCase('foo_Bar-BAZ').should.equal('Foo-Bar-Baz');
        });
    });
});
