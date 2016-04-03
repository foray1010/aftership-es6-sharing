import 'babel-polyfill';

class Parent {
	* test({prefix = '1234', suffix = '56789'}) {
		const str = `${prefix}itisworking${suffix}`;

		yield str;

		for (let char of str) {
			console.log(char);
		}

		return str.split('')
			.map(x => Number(x))
			.filter(x => x % 2 === 0);
	}
}

class Child extends Parent {
	constructor() {
		super();
	}

	consoleLogTest() {
		let generator_instance = this.test({suffix: ',havefun'});

		console.log(generator_instance.next());
		console.log(generator_instance.next());
	}
}

let child = new Child();
child.consoleLogTest();
