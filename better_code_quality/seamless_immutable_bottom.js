'use strict';

const Immutable = require('seamless-immutable');

const a = Immutable({});

const b = a.asMutable();
b.c = 1;

console.log(b); // => {c: 1}
console.log(a === b); // => false
