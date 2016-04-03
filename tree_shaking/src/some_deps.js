export function onlyFunctionCalled() {
	console.log('onlyFunctionCalled');
}

export function unusedFunction() {
	console.log('unusedFunction');
}

export const unused_variable = {
	name: 'unused_variable'
};

export default {
	unusedFunctionInObject() {},
	unused_variable_in_object: {
		name: 'unused_variable_in_object'
	}
};
