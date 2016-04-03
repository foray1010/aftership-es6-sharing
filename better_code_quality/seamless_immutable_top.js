'use strict';

const Immutable = require('seamless-immutable');

const a = Immutable({});

a.b = 1; // => TypeError: Can't add property b, object is not extensible
