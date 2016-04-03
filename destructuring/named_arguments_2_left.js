'use strict';

function feedTheCatAsync({cat_name, amount, time}, callback) {
}

function feedTheCatAsyncV2({amount, time}, callback) {
}

feedTheCatAsync({
	cat_name: 'kitty',
	amount: 100,
	time: '09:00'
}, function (err, result) {});

feedTheCatAsyncV2({
	cat_name: 'kitty',
	amount: 100,
	time: '09:00'
}, function (err, result) {}); // => it won't break the interface
