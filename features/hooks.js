const { Before } = require('cucumber');
const scope = require('./support/scope');

let dumpio = false;
let slowMo = 0;

Before(async () => {
	const browser = await scope.driver.launch({
		dumpio,
		headless: scope.headless,
		slowMo,
		args: ['--no-sandbox', '--single-process']
	});
	scope.browser = browser;
	console.log(`SCOPE Host: ${scope.host}`);
	console.log(`SCOPE Headless: ${scope.headless}`);
});
