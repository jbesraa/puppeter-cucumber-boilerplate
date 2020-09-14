const cucumber = require("cucumber");
const actions = require("../support/actions.js");

const { When, Given, Then, setDefaultTimeout } = cucumber;
const { } = actions;

setDefaultTimeout(60 * 1000);

Given("website is up", startWebsite);

When("successfully login", loginSuccessfully);

// Then("send order successfully", sendOrder);
