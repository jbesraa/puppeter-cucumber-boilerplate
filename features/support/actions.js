const scope = require('./scope');
const { typeInTextInput, pressButton } = require('./utils');

const startWebsite = async () => {
	scope.context.currentPage = await scope.browser.newPage();
	console.log('Create new page');
	const { currentPage } = scope.context;
	await currentPage.emulate(scope.device);
	console.log('Running iPhone6 emulator');
	const url = scope.host;
	console.log(`Start host: ${url}`);
	const visit = await currentPage.goto(url, {
		waitUntil: 'networkidle2'
	});

	return visit;
};


const loginSuccessfully = async () => {
	const username = '';
	const password = '';
	const passwordInputName = '';
	const usernameInputName = '';
	const loginButtonName = '';
	await typeInTextInput(usernameInputName, username);
	await typeInTextInput(passwordInputName, password);
	await pressButton(loginButtonName);
};


module.exports = {
	startWebsite,
	loginSuccessfully
};
