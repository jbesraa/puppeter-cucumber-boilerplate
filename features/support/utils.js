const scope = require('./scope');
const selectors = require('./selectors');

const typeInTextInput = async (inputName, value) => {
	console.log(`Fill in input ${inputName} with ${value}`);
	const { currentPage } = scope.context;
	await currentPage.waitForSelector(`input[name="${inputName}"]`);
	await currentPage.focus(`input[name="${inputName}"]`);
	await currentPage.type(`input[name="${inputName}"]`, value, { delay: 1 });
};

const pressButton = async buttonName => {
	console.log(`Click Button: ${buttonName}`);
	const { currentPage } = scope.context;
	await currentPage.waitForSelector(`button[name=${buttonName}]`);
	const navigationPromise = currentPage.waitForNavigation();
	await currentPage.click(`button[name=${buttonName}]`);
	await navigationPromise;
};

const openDrawer = async () => {
	// console.log('Open Drawer');
	// const { currentPage } = scope.context;
	// const burgerSelector = '#app-container #pageWrap #mobileHeader #openDrawer';
	// await currentPage.waitForSelector(burgerSelector);
	// await currentPage.click(burgerSelector);
};

const shouldHaveImage = async altAttribute => {
	const { currentPage } = scope.context;
	const imgs = await currentPage.$$eval('img', imgs =>
		imgs.map(img => img.getAttribute('alt'))
	);
	const isImageExist = imgs.indexOf(altAttribute) > -1;
	console.log(`Have ${altAttribute} img: ${isImageExist}`);

	return isImageExist;
};

const clickOnItem = async link => {
	const { currentPage } = scope.context;
	return await currentPage.click(selectors.links[link]);
};

const shouldSeeText = async text => {
	await delay(100);
	const { currentPage } = scope.context;
	const content = await currentPage.content();

	if (!content.includes(text))
		throw new Error(
			`Expected page to contain text: ${text}, but page contains only: ${content}`
		);
};

const delay = duration => new Promise(resolve => setTimeout(resolve, duration));

const wait = async timeInSeconds => {
	const time = parseInt(timeInSeconds) * 1000;
	await delay(time);
};

const reloadPage = async () => await scope.context.currentPage.reload();

module.exports = {
	openDrawer,
	shouldHaveImage,
	clickOnItem,
	typeInTextInput,
	pressButton,
	shouldSeeText,
	wait,
	reloadPage
};
