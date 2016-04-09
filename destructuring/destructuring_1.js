'use strict';

const obj = {
    key1: 'value1',
    key2: 'value2'
};

const {
    key1,
    key2: custom2
} = obj;

console.log(key1); // => 'value1'
console.log(custom2); // => 'value2'
