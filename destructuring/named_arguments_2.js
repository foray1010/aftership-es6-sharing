'use strict';

function feedTheCat({cat_name, amount, time}) {
}

function feedTheCatV2({amount, time}) {
}

feedTheCat({
	cat_name: 'kitty',
	amount: 100,
	time: '09:00'
});

feedTheCatV2({
	cat_name: 'kitty',
	amount: 100,
	time: '09:00'
}); // => it won't break the interface
