//Page object file - loginPage.js

var logger = require('../Utils/logUtil.js');
var ObjRep = require('../pageLocators/loginPageOR.json');
var commonPage = require('../pageObjects/commonPage.js');

var loginPage = function(){
	
	this.loginToAPP = function(){

		browser.ignoreSynchronization = true; //page is async

		browser.driver.manage().window().maximize();
		browser.get(browser.params.login.url);


		commonPage.getPageURL().then(function (resultText) {
			expect(resultText).toEqual('http://automationpractice.com/index.php');
			logger.log('info', '--- url verified ---');
		});

		commonPage.getPageTitle().then(function (resultText) {
			expect(resultText).toContain('My Store');
			logger.log('info', '--- title verified ---');
		});

		//browser.ignoreSynchronization = false;
	};
};
module.exports = new loginPage();