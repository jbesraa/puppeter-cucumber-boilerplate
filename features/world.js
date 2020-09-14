const { setWorldConstructor } = require('cucumber');
const scope = require('./support/scope');

const World = function() {
	scope.host;
	scope.driver;
	scope.context;
};

setWorldConstructor(World);
