const puppeteer = require('puppeteer');

const getHost = () => {
	if (process.env.NODE_ENV == 'test-local') {
		return 'http://127.0.0.1:8008';
	}
};

const isHeadless = () => {
	if (process.env.NODE_ENV == 'test-local') {
		return false;
	}
};

const scope = {
	host: getHost(),
	driver: puppeteer,
	device: puppeteer.devices['iPhone 6'],
	context: {},
	headless: isHeadless()
};

module.exports = scope;
