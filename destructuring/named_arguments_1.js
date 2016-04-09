'use strict';

function feedTheCat(cat_name, amount, time) {
}

function feedTheCatV2(amount, time) {
}

feedTheCat('kitty', 100, '09:00');

// it will fail
feedTheCatV2('kitty', 100, '09:00');
// => You must break the interface
feedTheCatV2(100, '09:00');
