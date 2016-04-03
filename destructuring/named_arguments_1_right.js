'use strict';

function ajax(options) {
	let async = options.async || false;

	// more accurate, to allow non-true value
	let timeout = options.hasOwnProperty('timeout') ? options.timeout : 3000;
}
