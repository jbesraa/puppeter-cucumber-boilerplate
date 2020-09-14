// These are ways of being able to identify HTML elements to interact with and check.
const selectors = {
	links: {
		Logout: 'a.logout',
		'I have forgotten my password': 'a[href="/forgot-password"]',
		'Your account': 'a[href="/account"]'
	},
	buttons: {
		SubmitOrder: '',
		SendOrder: ''
	}
};

module.exports = selectors;
