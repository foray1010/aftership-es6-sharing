'use strict';

function feedTheCatAsync(cat_name, amount, time, callback) {
}

function feedTheCatAsyncV2(amount, time, callback) {
}

feedTheCatAsync('kitty', 100, '09:00', function (err, result) {});

feedTheCatAsync('kitty', 100, '09:00', function (err, result) {}); // => it will fail
feedTheCatAsync(100, '09:00', function (err, result) {}); // => You must break the interface, and if it is a npm package, bump the major version
